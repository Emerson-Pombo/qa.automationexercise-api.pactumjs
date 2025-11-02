import Joi from 'joi';


export const produtoItemSchema = Joi.object({
    nome: Joi.string().required(),
    preco: Joi.number().required(),
    descricao: Joi.string().required(),
    quantidade: Joi.number().required(),
    _id: Joi.string().required()
}).unknown(true);


export const produtosListSchema = Joi.object({
    quantidade: Joi.number().required(),
    produtos: Joi.array().items(produtoItemSchema).required()
}).required();


export const createProdutoSuccessSchema = Joi.object({
    message: Joi.string().required(),
    _id: Joi.string().required()
}).required();