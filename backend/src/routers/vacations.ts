import { Router } from "express";
import { getAll } from "../controllers/vacations/controller";


const router = Router();

router.get('/vacations', getAll)

export default router;