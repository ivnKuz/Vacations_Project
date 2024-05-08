import { Router } from "express";
import { add, deleteFollow, deleteVacation, getAll, getAllFollowers, getFollowersCount, getOne, userFollowed } from "../controllers/vacations/controller";
import enforceAuth from "../middlewares/enforce-auth";
import enforceAdmin from "../middlewares/enforce-admin";
import addImageToBody from "../middlewares/add-image-to-body";
import validate from "../middlewares/input-validation";
import { addVacationValidator } from "../controllers/vacations/validator";
import uploadImage from "../middlewares/upload-image";


const router = Router();
// router.use(enforceAuth)
router.get('/vacations', getAll);
router.get('/vacations/:id([0-9]+)', getOne);
router.get('/followers', getAllFollowers);
router.get('/followersCount', getFollowersCount);
router.post('/vacations', enforceAdmin, addImageToBody, validate(addVacationValidator), uploadImage,  add)
router.post('/followed', enforceAuth, userFollowed);
router.delete('/followed/:id/:userId', enforceAuth, deleteFollow);
router.delete('/vacations/delete/:id', enforceAdmin, deleteVacation);

export default router;