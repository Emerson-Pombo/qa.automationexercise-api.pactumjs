import { spec, setAuthToken } from '../helpers/api.js'
import { config } from '../config/index.js';

before(async () => {
    const res = await spec()
        .post('/login')
        .withJson({
            email: config.email,
            password: config.password
        })
        .expectStatus(200)
        .returns('res.body');

    setAuthToken(res.authorization);
    console.log('🔑 Token de login obtido e armazenado!');
});
