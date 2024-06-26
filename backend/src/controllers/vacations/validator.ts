import Joi from "joi"
import DTO from '../../models/vacations/dto';

//add vacation validator, all of the input fields are mandatory to fill, 
//start date cannot be today and end date cannot be before start date, images can only be certain mime types.
export const addVacationValidator = Joi.object<DTO>({
    id: Joi.number().optional(),
    destination: Joi.string().max(40).required().messages(
        {'string.max': 'Destination title should not be longer than 40 characters.'}),
    description: Joi.string().max(500).required().messages(
        {'string.max': 'Description should not be longer than 500 characters.'}),
    startDate: Joi.date().min(new Date().toISOString()).required().messages(
        {'date.min':'Beginning Date cannot be past date or today date.'}),
    endDate: Joi.date().min(Joi.ref('startDate')).required().messages(
        {'date.min':'End Date cannot be set before the begining date.'}),
    price: Joi.number().min(1).max(10000).required().messages(
        {'number.min': 'Price cannot be negative or less than 1',
         'number.max': 'price cannot be higher than 10,000$'}),
    image: Joi.object({
        mimetype: Joi.string().valid('image/jpg', 'image/jpeg', 'image/png', 'image/webp')
        .messages({
            'any.only': 'Invalid image mimetype. Only JPG, JPEG, PNG, and WebP formats are allowed.'
        })
    }).unknown(true).required().messages({'any.required': 'Image is required.'})
});
//start date can be past date, cuz u should be able to edit those that ended(in the description of project)
export const editVacationValidator = Joi.object<DTO>({
    id: Joi.number().optional(),
    destination: Joi.string().max(40).required().messages(
        {'string.max': 'Destination title should not be longer than 40 characters.'}),
    description: Joi.string().min(1).max(500).required().messages(
        {'string.max': 'Description should not be longer than 500 characters.'}),
    startDate: Joi.date().required(),
    endDate: Joi.date().min(Joi.ref('startDate')).required().messages(
        {'date.min':'End Date cannot be set before the begining date.'}),
    price: Joi.number().min(1).max(10000).required().messages(
        {'number.min': 'Price cannot be negative or less than 1', 'number.max': 'price cannot be higher than 10,000$'}),
    image: Joi.object({
        mimetype: Joi.string().valid('image/jpg', 'image/jpeg', 'image/png', 'image/webp')
        .messages({
            'any.only': 'Invalid image mimetype. Only JPG, JPEG, PNG, and WebP formats are allowed.'
        })
    }).unknown(true).optional()
});