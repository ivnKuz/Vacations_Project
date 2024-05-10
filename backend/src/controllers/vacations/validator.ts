import Joi from "joi"
import DTO from '../../models/vacations/dto';

// const date = new Date();
// date.setHours(date.getHours()- 24);
export const addVacationValidator = Joi.object<DTO>({
    id: Joi.number().optional(),
    destination: Joi.string().required(),
    description: Joi.string().required(),
    startDate: Joi.date().min(new Date().toISOString()).required(),
    endDate: Joi.date().min(Joi.ref('startDate')).required(),
    price: Joi.number().min(1).max(10000),
    image: Joi.object({
        mimetype: Joi.string().valid('image/jpg', 'image/jpeg', 'image/png', 'image/webp')
    }).unknown(true).optional()
});
//start date can be past date, cuz u should be able to edit those that ended(in the description of project)
export const editVacationValidator = Joi.object<DTO>({
    id: Joi.number().optional(),
    destination: Joi.string(),
    description: Joi.string().min(1).max(255),
    startDate: Joi.date(),
    endDate: Joi.date().min(Joi.ref('startDate')),
    price: Joi.number().min(1).max(10000),
    image: Joi.object({
        mimetype: Joi.string().valid('image/jpg', 'image/jpeg', 'image/png', 'image/webp')
    }).unknown(true).optional()
});