import Model from "./model";
import DTO from './dto';
import { OkPacketParams } from "mysql2";
import query from "../../db/mysql";
import config from "config";

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

    // public async getOne(loremIpsum: DTO): Promise<DTO> {
        // const user = (await query(`
        //     SELECT  userId AS id,
        //             username as email,
        //             password,
        //             firstName,
        //             lastName,
        //             roleId
        //     FROM    users  
        //     WHERE   userId = ?
        // `, [id]))[0];
        // return user;
    // }
}

const vacation = new Vacation();
export default vacation;