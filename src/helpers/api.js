import pactum from 'pactum';
import { config } from '../config/index.js';

pactum.request.setBaseUrl(config.baseURL);

let authToken = null;

export function setAuthToken(token) {
    authToken = token;
}

export function spec() {
    const s = pactum.spec();
    if (authToken) {
        s.withHeaders('Authorization', authToken);
    }
    return s;
}
