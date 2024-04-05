import Model from "./model";
import CredentialsDTO from './credentials-dto';
import UserDTO, {Roles} from './user-dto'
import { OkPacketParams } from "mysql2";
import query from "../../db/mysql";
import { createHash } from 'crypto';
import  config  from "config";
import { hashPassword } from "../../utils/crypto";
class User implements Model {
  
    public async getOne(id: string): Promise<UserDTO> {
        const user = (await query(`
            SELECT  id,
                    password ,
                    name,
                    lastName,
                    roleId
            FROM    Users
            WHERE   id = ?
        `, [id]))[0];
        return user;
    }

    public async login(credentials: CredentialsDTO): Promise<UserDTO>{
      const {email, password} = credentials;
      const user = (await query(`
      SELECT     id,
                email,
                password ,
                name,
                lastName,
                roleId
        FROM    Users
        WHERE   email = ? 
        AND     password = ?
      `, [email, hashPassword(password, config.get<string>('app.secret'))]))[0];
      return user;
    }
//is this OK? If email is uinque, idk
    public async getUUID(email:string): Promise<string>{
        const uuidId = (await query(`
        SELECT     id
          FROM    Users
          WHERE   email = ? 
        `, [email]))[0];
        const uuid = await uuidId;
        const {id} = uuid;
        return id;
    }
    public async signUp(user: UserDTO): Promise<UserDTO>{
        const {firstName, lastName, email, password} = user;
        const result: OkPacketParams = await query(`
        INSERT INTO Users(name, lastName, email, password, roleId) 
        VALUES(?,?,?,?,?) 
    `, [firstName, lastName, email, hashPassword(password, config.get<string>('app.secret')), Roles.USER]);
    return this.getOne(await this.getUUID(email));
    }
}

const user = new User();
export default user;