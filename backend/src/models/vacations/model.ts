import DTO from './dto';
import followDTO from './followDTO'
import followerCountDTO from './followersCountDTO';
export default interface Model {
    getAll(): Promise<DTO[]>;
    getAllFollowers(): Promise<followDTO[]>;
    getFollowersCount(): Promise<followerCountDTO[]>
    userFollowed(follower: followDTO): Promise<followDTO>;
    add(vacation: DTO): Promise<DTO>;
    getOne(id: number): Promise<DTO>
    deleteFollow(vocationId: number, userId:string): Promise<boolean>;
    deleteVacation(id: number): Promise<boolean>;
}