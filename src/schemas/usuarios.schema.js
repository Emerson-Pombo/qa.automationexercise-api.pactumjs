import Joi from 'joi';


export const usuarioItemSchema = Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().email().required(),
    administrador: Joi.string().valid('true', 'false').required(),
    _id: Joi.string().required()
}).unknown(true); // ❌ bloqueia campos extras, como "password"


export const usuarioByIdSchema = Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().email().required(),
    administrador: Joi.string().valid('true', 'false').required(),
    _id: Joi.string().required()
}).required();

export const usuariosListSchema = Joi.object({
    quantidade: Joi.number().required(),
    usuarios: Joi.array().items(usuarioItemSchema).required()
}).required();


export const createUsuarioSuccessSchema = Joi.object({
    message: Joi.string().required(),
    _id: Joi.string().required()
}).required();


export const commonMessageSchema = Joi.object({
    message: Joi.string().required()
}).required();