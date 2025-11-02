import { expect } from 'chai';
import { spec } from '../../helpers/api.js';
import { fakeUser } from '../../helpers/data.js';
import {
    usuariosListSchema,
    createUsuarioSuccessSchema,
    commonMessageSchema
} from '../../schemas/usuarios.schema.js';

import Joi from 'joi';

let userId;

describe('Usuários CRUD', () => {
    // 🧩 Arrange — nenhuma preparação necessária para listagem de usuários

    // ⚙️ Act
    it('GET /usuarios - lista + contrato', async () => {
        const res = await spec().get('/usuarios').expectStatus(200).returns('res.body');
        const { error } = usuariosListSchema.validate(res);

        // ✅ Assert
        expect(error, String(error)).to.be.undefined;
        expect(res.quantidade).to.be.a('number');
    });


    it('POST /usuarios - criação + contrato', async () => {
        // 🧩 Arrange
        const payload = fakeUser();

        // ⚙️ Act
        const res = await spec().post('/usuarios').withJson(payload).expectStatus(201).returns('res.body');

        // ✅ Assert
        const { error } = createUsuarioSuccessSchema.validate(res);
        expect(error, String(error)).to.be.undefined;
        userId = res._id;
    });


    it('GET /usuarios/{id} - busca + contrato item', async () => {
        // 🧩 Arrange

        // ⚙️ Act
        const payload = {
            nome: 'Usuário Atualizado QA',
            email: `${Date.now()}@testeqa.com`, // email único
            password: '123456',
            administrador: 'false'
        };

        const res = await spec()
            .put(`/usuarios/${userId}`)
            .withJson(payload)
            .expectStatus(200)
            .returns('res.body');

        // ✅ Assert

        const messageSchema = Joi.object({
            message: Joi.string().required()
        }).required();

        const { error } = messageSchema.validate(res);
        expect(error, String(error)).to.be.undefined;
    });

    it('PUT /usuarios/{id} - alteração', async () => {
        // 🧩 Arrange
        const payload = {
            nome: 'Usuário Atualizado QA',
            email: `${Date.now()}@testeqa.com`, // email único
            password: '123456',
            administrador: 'false'
        };

        // ⚙️ Act
        const res = await spec()
            .put(`/usuarios/${userId}`)
            .withJson(payload)
            .expectStatus(200)
            .returns('res.body');

        // ✅ Assert
        const messageSchema = Joi.object({
            message: Joi.string().required()
        }).required();

        const { error } = messageSchema.validate(res);
        expect(error, String(error)).to.be.undefined;
    });

    it('DELETE /usuarios/{id} - exclusão', async () => {
        // 🧩 Arrange

        // ⚙️ Act
        const res = await spec().delete(`/usuarios/${userId}`).expectStatus(200).returns('res.body');

        // ✅ Assert
        const { error } = commonMessageSchema.validate(res);
        expect(error, String(error)).to.be.undefined;
    });
});