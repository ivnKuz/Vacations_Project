import Model from "./model";
import CredentialsDTO from './credentials-dto';
import UserDTO, {Roles} from './user-dto'
import { OkPacketParams } from "mysql2";
import query from "../../db/mysql";
import  config  from "config";
import { hashPassword } from "../../utils/crypto";
import { v4 } from 'uuid';
class User implements Model {
  
    public async getOne(id: string): Promise<UserDTO> {
        const user = (await query(`
            SELECT  id,
                    password,
                    email,
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

    public async signUp(user: UserDTO): Promise<UserDTO>{
        const {firstName, lastName, email, password} = user;
        const id = v4();
        const result: OkPacketParams = await query(`
        INSERT INTO Users(id, name, lastName, email, password, roleId) 
        VALUES(?, ?,?,?,?,?) 
    `, [id, firstName, lastName, email, hashPassword(password, config.get<string>('app.secret')), Roles.USER]);
    return this.getOne(id);
    }
}

const user = new User();
export default user;