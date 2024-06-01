import Model from "./model";
import DTO from './dto';
import { OkPacketParams } from "mysql2";
import query from "../../db/mysql";
import followersDTO from "./followDTO";
import followerCountDTO from "./followersCountDTO";
import csvDTO from "./csvDTO";

class Vacation implements Model {

    public async getAll(): Promise<DTO[]> {
        const vacations = await query(`
            SELECT  id,
                    destination,
                    description,
                    startDate,
                    endDate,
                    price,
                    imageName
            FROM    vacations
        `)
        return vacations;
    }
    //returns only certain amount of vacations requested in the request
    //ADDING TOTALVACATIONCOUNT TO all the vacations because frontend side needs it to know how many pages to show.
    public async getPaginatedVacations(pageNumber:number, pageSize:number): Promise<DTO[]> {
        const offset = (pageNumber - 1) * pageSize;
        const limit = pageSize;
          const vacations = await query('SELECT *, COUNT(*) OVER () AS totalVacationsCount FROM vacations ORDER BY startDate ASC LIMIT ?, ?', [offset, limit]);
          return vacations;
      }
      //return only vacations where user id matches the request and join with followers table that way returning all vacations user follows by their id.
      public async filterByFollow(userId:string, pageNumber:number, pageSize:number): Promise<DTO[]>{
        const offset = (pageNumber - 1) * pageSize;
        const limit = pageSize;
        const vacations = await query(`SELECT *,
        COUNT(*) OVER () AS totalVacationsCount
        FROM vacations v
        JOIN Followers f ON v.id = f.vocationId
        WHERE f.userId = ?
        LIMIT ?, ?;`,[userId, offset, limit]);
        return vacations
      }
      //filters by available, meaning the vacation that didnt start yet.
      public async filterByAvailable(pageNumber:number, pageSize:number): Promise<DTO[]> {
        const offset = (pageNumber - 1) * pageSize;
        const limit = pageSize;
          const vacations = await query(`
          SELECT *,
          COUNT(*) OVER () AS totalVacationsCount
          FROM   vacations
          WHERE  startDate > CURRENT_DATE
          LIMIT ?, ?;`, [offset, limit]);
          return vacations;
      }
      //filters by active, meaning vacations that are currently began and didn't finished yet.
      public async filterByActive(pageNumber:number, pageSize:number): Promise<DTO[]> {
        const offset = (pageNumber - 1) * pageSize;
        const limit = pageSize;
          const vacations = await query(`
          SELECT *,
          COUNT(*) OVER () AS totalVacationsCount
          FROM   vacations
          WHERE  startDate < CURRENT_DATE 
          AND  CURRENT_DATE < endDate
          LIMIT ?, ?;`, [offset, limit]);
          return vacations;
      }

      

    //get vacation id, destination and number of followers. Using for scv file and chart graph
    public async getVacationsCSV(): Promise<csvDTO[]> {
        const vacationsCsv = await query(`
        SELECT v.id, v.destination, COUNT(f.vocationId) AS followers
        FROM vacations AS v
        LEFT JOIN Followers AS f ON f.vocationId = v.id 
        GROUP BY v.id, v.destination;
        `)
        return vacationsCsv;
    }

    

    public async getAllFollowers(): Promise<followersDTO[]> {
        const followers = await query(`
            SELECT  userId,
                    vocationId
            FROM    Followers
        `)
        return followers;
    }
    //show vacation id and amount of followers this vacation has by joining followers table and vacations tabale
    public async getFollowersCount(): Promise<followerCountDTO[]> {
        const followerCount = await query(`
        SELECT v.id, count(f.vocationId) as followers
         FROM vacations AS v
          LEFT JOIN Followers AS f 
          ON f.vocationId = v.id 
          GROUP BY v.id;
        `)
        return followerCount;
    }

    public async userFollowed(follower: followersDTO): Promise<followersDTO>{
        const {userId, vocationId} = follower;
        const result: OkPacketParams = await query(`
        INSERT INTO Followers(userId, vocationId)
         VALUES (?, ?);
        `, [userId, vocationId]);
        return this.getOneFollower(userId);
    }
    //one vacation
    public async getOne(id: number): Promise<DTO> {
        const vacations = await query(`
            SELECT   id,
                    destination,
                    description,
                    startDate,
                    endDate,
                    price,
                    imageName
            FROM    vacations  
            WHERE   id = ?
        `, [id]);
        return vacations[0];
    }
    //add vacation
    public async add(vacation: DTO): Promise<DTO> {
        const {destination, description, startDate, endDate, price, imageName} = vacation;
        const result: OkPacketParams = await query(`
            INSERT INTO vacations(destination, description, startDate, endDate, price, imageName) 
            VALUES(?,?,?,?,?,?) 
        `, [destination, description, startDate, endDate, price, imageName]);
        return this.getOne(result.insertId);
    }
    //edit vacation
    public async update(vacation: DTO): Promise<DTO> {
        const {id, destination, description, startDate, endDate, price, imageName} = vacation;
        await query(`
            UPDATE  vacations
            SET     destination = ?, 
                    description = ?,
                    startDate = ?,
                    endDate = ?,
                    price = ?,
                    imageName = ?
            WHERE   id = ?
        `, [destination, description, startDate, endDate, price, imageName, id]);
        return this.getOne(id);
    }
    
    public async deleteFollow(vocationId: number, userId:string): Promise<boolean> {
        const result:OkPacketParams = await query(`
            DELETE FROM Followers
            WHERE       vocationId  = ? && userId = ?
        `, [ vocationId, userId]);
        return Boolean(result.affectedRows);
    }

    public async getOneFollower(id: string): Promise<followersDTO> {
        const user = (await query(`
            SELECT  userId,
                    vocationId
            FROM    Followers  
            WHERE   userId = ?
        `, [id]))[0];
        return user;
    }
    public async deleteVacation(id: number): Promise<boolean> {
        const result:OkPacketParams = await query(`
            DELETE FROM vacations
            WHERE       id = ?
        `, [id]);
        return Boolean(result.affectedRows);
    }
}

const vacation = new Vacation();
export default vacation;