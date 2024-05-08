import Joi from "joi"
import DTO from '../../models/vacations/dto';

export const addVacationValidator = Joi.object<DTO>({
    id: Joi.number().optional(),
    destination: Joi.string().required(),
    description: Joi.string().required(),
    startDate: Joi.date().min(new Date().toISOString()).required(),
    endDate: Joi.date().required(),
    price: Joi.number().min(1).max(50000),
    image: Joi.object({
        mimetype: Joi.string().valid('image/jpg', 'image/jpeg', 'image/png')
    }).unknown(true).optional()
});

export const putVacationValidator = addVacationValidator;

export const editVacationValidator = Joi.object<DTO>({
    id: Joi.number().optional(),
    destination: Joi.string().alphanum(),
    description: Joi.number().min(1).max(255),
    startDate: Joi.date().min(new Date().toISOString()),
    endDate: Joi.date(),
    price: Joi.number().min(1).max(50000),
    image: Joi.object({
        mimetype: Joi.string().valid('image/jpg', 'image/jpeg', 'image/png')
    }).unknown(true).optional()
});