import { Router } from "express";
import { deleteFollow, getAll, getAllFollowers, getFollowersCount, userFollowed } from "../controllers/vacations/controller";


const router = Router();

router.get('/vacations', getAll);
router.get('/followers', getAllFollowers)
router.get('/followersCount', getFollowersCount)
router.post('/followed', userFollowed);
router.delete('/followed/:id:userId', deleteFollow)

export default router;