import Joi from "joi"
import DTO from '../../models/vacations/dto';

const date = new Date();
//have to cut one day, because it won't let me create vacation from today, idk tho if its fine to do from today TO CHANGE
date.setHours(date.getHours()- 24);
export const addVacationValidator = Joi.object<DTO>({
    id: Joi.number().optional(),
    destination: Joi.string().required(),
    description: Joi.string().required(),
    startDate: Joi.date().min(new Date().toISOString()).required(),
    endDate: Joi.date().min(Joi.ref('startDate')).required(),
    price: Joi.number().min(1).max(10000),
    image: Joi.object({
        mimetype: Joi.string().valid('image/jpg', 'image/jpeg', 'image/png')
    }).unknown(true).optional()
});
// CHANGE START DATE ON EDIT MAYBE, doesn't need to be current date to edit it.
export const editVacationValidator = Joi.object<DTO>({
    id: Joi.number().optional(),
    destination: Joi.string(),
    description: Joi.string().min(1).max(255),
    startDate: Joi.date().min(date.toISOString()),
    endDate: Joi.date().min(Joi.ref('startDate')),
    price: Joi.number().min(1).max(10000),
    image: Joi.object({
        mimetype: Joi.string().valid('image/jpg', 'image/jpeg', 'image/png')
    }).unknown(true).optional()
});