import { Router } from "express";
import { deleteFollow, getAll, getAllFollowers, userFollowed } from "../controllers/vacations/controller";


const router = Router();

router.get('/vacations', getAll);
router.get('/followers', getAllFollowers)
router.post('/followed', userFollowed);
router.delete('/followed/:id', deleteFollow)

export default router;