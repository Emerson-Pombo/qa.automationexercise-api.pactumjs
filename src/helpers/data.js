import { faker } from '@faker-js/faker';


export function fakeUser(overrides = {}) {
    return {
        nome: faker.person.fullName(),
        email: faker.internet.email().toLowerCase(),
        password: '1234',
        administrador: 'true',
        ...overrides
    };
}

export function fakeProduct(overrides = {}) {
    return {
        nome: faker.commerce.productName(),
        preco: Number(faker.commerce.price({ min: 10, max: 999, dec: 0 })),
        descricao: faker.commerce.productDescription(),
        quantidade: Number(faker.number.int({ min: 1, max: 50 })),
        ...overrides
    };
}