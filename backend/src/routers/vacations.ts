import { Router } from "express";
import { deleteFollow, getAll, userFollowed } from "../controllers/vacations/controller";


const router = Router();

router.get('/vacations', getAll);
router.post('/followed', userFollowed);
router.delete('/followed/:id', deleteFollow)

export default router;