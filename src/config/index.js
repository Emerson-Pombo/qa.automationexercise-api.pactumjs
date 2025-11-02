import 'dotenv/config';


export const config = {
    baseURL: process.env.BASE_URL || 'https://serverest.dev',
    email: process.env.LOGIN_EMAIL,
    password: process.env.LOGIN_PASSWORD
};