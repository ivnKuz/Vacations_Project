import Joi from "joi";
import UserDTO from '../../models/auth/user-dto'
import CredentialsDTO from '../../models/auth/credentials-dto'
export const signupValidator = Joi.object<UserDTO>({
    email: Joi.string().email().required().messages({'string.email':'Invalid email'}),
    password: Joi.string().min(4).max(36).required().messages({'string.min':'password has to be at least 4 characters', 'string.max':'password cannot be more than 36 characters long'}),
    firstName: Joi.string().min(2).max(20).required().messages({'string.min':'First Name must be at least 2 characters long','string.max':'First Name must be shorter than 20 characters'}),
    lastName: Joi.string().min(2).max(20).required().messages({'string.min':'Last Name must be at least 2 characters long','string.max':'Last Name must be shorter than 20 characters'})
})

export const loginValidator = Joi.object<CredentialsDTO>({
    email: Joi.string().email(),
    password: Joi.string().min(4).required()
})