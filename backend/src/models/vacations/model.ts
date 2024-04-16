import DTO from './dto';
import followDTO from './followDTO'
export default interface Model {
    getAll(): Promise<DTO[]>;
    getAllFollowers(): Promise<DTO[]>;
    userFollowed(follower: followDTO): Promise<followDTO>;
    deleteFollow(id: number): Promise<boolean>;
}