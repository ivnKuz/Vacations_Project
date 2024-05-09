import Joi from "joi"
import DTO from '../../models/vacations/dto';

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

// export const putVacationValidator = addVacationValidator;

export const editVacationValidator = Joi.object<DTO>({
    id: Joi.number().optional(),
    destination: Joi.string(),
    description: Joi.string().min(1).max(255),
    startDate: Joi.date().min(new Date().toISOString()),
    endDate: Joi.date().min(Joi.ref('startDate')),
    price: Joi.number().min(1).max(10000),
    image: Joi.object({
        mimetype: Joi.string().valid('image/jpg', 'image/jpeg', 'image/png')
    }).unknown(true).optional()
});