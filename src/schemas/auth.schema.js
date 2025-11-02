import Joi from 'joi';


export const loginSuccessSchema = Joi.object({
    message: Joi.string().required(),
    authorization: Joi.string().required()
}).required();


export const loginErrorSchema = Joi.object({
    message: Joi.string().required()
}).required();