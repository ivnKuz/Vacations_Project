import { Router } from "express";
import { add, deleteFollow, deleteVacation, edit, filterByActive, filterByAvailable, filterByFollow, getAll, getAllFollowers, getDataForCharts, getFollowersCount, getOne, getPaginatedVacations, getVacationsCSV, userFollowed } from "../controllers/vacations/controller";
import enforceAuth from "../middlewares/enforce-auth";
import enforceAdmin from "../middlewares/enforce-admin";
import addImageToBody from "../middlewares/add-image-to-body";
import validate from "../middlewares/input-validation";
import { addVacationValidator, editVacationValidator } from "../controllers/vacations/validator";
import uploadImage from "../middlewares/upload-image";

//all these routes require authentication or a specific role
const router = Router();
router.get('/vacations', enforceAuth, getAll);
router.get('/vacations/page=:pageNumber&pageSize=:pageSize', enforceAuth, getPaginatedVacations);
router.get('/vacations/filter/page=:pageNumber&pageSize=:pageSize&userId=:userId', enforceAuth, filterByFollow);
router.get('/vacations/available/page=:pageNumber&pageSize=:pageSize', enforceAuth, filterByAvailable);
router.get('/vacations/active/page=:pageNumber&pageSize=:pageSize', enforceAuth, filterByActive);
router.get('/vacations/csv', enforceAdmin, getVacationsCSV);
router.get('/vacations/report', enforceAdmin, getDataForCharts)
router.get('/vacations/:id([0-9]+)', enforceAuth, getOne);
router.get('/followers', enforceAuth, getAllFollowers);
router.get('/followersCount', enforceAuth, getFollowersCount);
router.post('/vacations', enforceAdmin, addImageToBody, validate(addVacationValidator), uploadImage,  add);
router.patch('/vacations/:id([0-9]+)',enforceAdmin, addImageToBody, validate(editVacationValidator), uploadImage, edit);
router.post('/followed', enforceAuth, userFollowed);
router.delete('/followed/:id/:userId', enforceAuth, deleteFollow);
router.delete('/vacations/delete/:id', enforceAdmin, deleteVacation);

export default router;