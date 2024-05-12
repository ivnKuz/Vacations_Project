
import Joi from "joi";
import UserDTO from '../../models/auth/user-dto'
import CredentialsDTO from '../../models/auth/credentials-dto'
export const signupValidator = Joi.object<UserDTO>({
    email: Joi.string().email().required().messages({'string.email':'Invalid email'}),
    password: Joi.string().min(4).required().messages({'string.min':'password has to be at least 4 characters'}),
    firstName: Joi.string().min(2).max(20).required(),
    lastName: Joi.string().min(2).max(20).required()
})

export const loginValidator = Joi.object<CredentialsDTO>({
    email: Joi.string().email(),
    password: Joi.string().min(4).required()
})