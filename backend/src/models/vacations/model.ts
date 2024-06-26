import DTO from './dto';
import followDTO from './followDTO'
import followerCountDTO from './followersCountDTO';
import csvDTO from './csvDTO'
export default interface Model {
    getAll(): Promise<DTO[]>;
    getPaginatedVacations(pageNumber:number, pageSize:number): Promise<DTO[]>;
    filterByFollow(userId:string, pageNumber:number, pageSize:number): Promise<DTO[]>;
    filterByAvailable(pageNumber:number, pageSize:number): Promise<DTO[]>;
    filterByActive(pageNumber:number, pageSize:number): Promise<DTO[]>
    getVacationsCSV(): Promise<csvDTO[]>;
    getAllFollowers(): Promise<followDTO[]>;
    getFollowersCount(): Promise<followerCountDTO[]>
    userFollowed(follower: followDTO): Promise<followDTO>;
    add(vacation: DTO): Promise<DTO>;
    getOne(id: number): Promise<DTO>;
    update(vacation: DTO): Promise<DTO>;
    deleteFollow(vocationId: number, userId:string): Promise<boolean>;
    deleteVacation(id: number): Promise<boolean>;
}