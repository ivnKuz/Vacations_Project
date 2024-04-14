import { Router } from "express";
import { getAll, userFollowed } from "../controllers/vacations/controller";


const router = Router();

router.get('/vacations', getAll);
router.post('/followed', userFollowed)

export default router;