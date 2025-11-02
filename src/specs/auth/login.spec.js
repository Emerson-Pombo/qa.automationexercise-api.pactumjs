import { expect } from 'chai';
import { spec, setAuthToken } from '../../helpers/api.js';
import { config } from '../../config/index.js';
import { loginSuccessSchema, loginErrorSchema } from '../../schemas/auth.schema.js'

describe('Auth /login', () => {
    it('Login com sucesso + contrato', async () => {
        // 🧩 Arrange
        const payload = { email: config.email, password: config.password };

        // ⚙️ Act
        const res = await spec()
            .post('/login')
            .withJson(payload)
            .expectStatus(200)
            .returns('res.body');

        const { error } = loginSuccessSchema.validate(res);
        expect(error, String(error)).to.be.undefined;
        expect(res).to.have.property('authorization');


        setAuthToken(res.authorization);
    });

    it('Login inválido - contrato de erro', async () => {
        const res = await spec()
            .post('/login')
            .withJson({ email: 'naoexiste@qa.com', password: 'errada' })
            .expectStatus(401)
            .returns('res.body');

        // ✅ Assert
        const { error } = loginErrorSchema.validate(res);
        expect(error, String(error)).to.be.undefined;
    });
});