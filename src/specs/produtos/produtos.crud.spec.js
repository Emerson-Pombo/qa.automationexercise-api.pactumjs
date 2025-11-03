import { expect } from 'chai';
import { spec } from '../../helpers/api.js';
import { fakeProduct } from '../../helpers/data.js';
import {
    produtosListSchema,
    createProdutoSuccessSchema,
    produtoItemSchema
} from '../../schemas/produtos.schema.js';
import Joi from 'joi';


let productId;


describe('Produtos CRUD', () => {

    it('GET /produtos - lista + contrato', async () => {
        // Arrange — nenhuma preparação necessária para o GET de listagem

        // Act
        const res = await spec().get('/produtos').expectStatus(200).returns('res.body');

        // Assert
        const { error } = produtosListSchema.validate(res);
        expect(error, String(error)).to.be.undefined;
        expect(res.quantidade).to.be.a('number');
    });


    it('POST /produtos - criação + contrato', async () => {
        // Arrange
        const payload = fakeProduct();

        // Act
        const res = await spec().post('/produtos').withJson(payload).expectStatus(201).returns('res.body');

        // Assert
        const { error } = createProdutoSuccessSchema.validate(res);
        expect(error, String(error)).to.be.undefined;
        productId = res._id;
    });


    it('GET /produtos/{id} - item + contrato', async () => {
        // Arrange — utiliza o ID salvo do produto criado anteriormente

        // Act
        const res = await spec().get(`/produtos/${productId}`).expectStatus(200).returns('res.body');
        const { error } = produtoItemSchema.validate(res);

        // Assert
        expect(error, String(error)).to.be.undefined;
        expect(res._id).to.equal(productId);
    });


    it('PUT /produtos/{id} - edição', async () => {
        // Arrange

        const payload = {
            nome: 'Produto Atualizado',
            preco: 250,
            descricao: 'Atualização de teste automática',
            quantidade: 99
        };

        // Act

        const res = await spec()
            .put(`/produtos/${productId}`)
            .withJson(payload)
            .expectStatus(200)
            .returns('res.body');

        // Assert

        const messageSchema = Joi.object({ message: Joi.string().required() }).required();
        const { error } = messageSchema.validate(res);
        expect(error, String(error)).to.be.undefined;
    });


    it('DELETE /produtos/{id} - exclusão', async () => {
        // Arrange — utiliza o mesmo ID armazenado anteriormente

        //  Act
        const res = await spec().delete(`/produtos/${productId}`).expectStatus(200).returns('res.body');
        const messageSchema = Joi.object({ message: Joi.string().required() }).required();

        //  Assert
        const { error } = messageSchema.validate(res);
        expect(error, String(error)).to.be.undefined;
    });
});