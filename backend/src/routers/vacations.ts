import { Router } from "express";
import { deleteFollow, deleteVacation, getAll, getAllFollowers, getFollowersCount, userFollowed } from "../controllers/vacations/controller";
import enforceAuth from "../middlewares/enforce-auth";
import enforceAdmin from "../middlewares/enforce-admin";


const router = Router();
// router.use(enforceAuth)
router.get('/vacations', getAll);
router.get('/followers', getAllFollowers)
router.get('/followersCount', getFollowersCount)
router.post('/followed', enforceAuth, userFollowed);
router.delete('/followed/:id:userId', enforceAuth, deleteFollow);
router.delete('/vacations/delete/:id', enforceAdmin, deleteVacation)

export default router;