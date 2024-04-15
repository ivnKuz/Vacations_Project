import Model from "./model";
import DTO from './dto';
import { OkPacketParams } from "mysql2";
import query from "../../db/mysql";
import config from "config";
import followersDTO from "./followDTO";

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
    public async userFollowed(follower: followersDTO): Promise<followersDTO>{
        const {userId, vocationId} = follower;
        const result: OkPacketParams = await query(`
        INSERT INTO Followers(userId, vocationId)
         VALUES (?, ?);
        `, [userId, vocationId]);
        return this.getOneFollower(userId);
    }
    
    public async deleteFollow(id: number): Promise<boolean> {
        const result:OkPacketParams = await query(`
            DELETE FROM Followers
            WHERE       vocationId  = ?
        `, [id]);
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
}

const vacation = new Vacation();
export default vacation;