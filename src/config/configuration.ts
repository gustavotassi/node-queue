import dotenv from 'dotenv';

dotenv.config();

const env = process.env;

export default {
    port: env.PORT,
    mailHost: env.MAIL_HOST,
    mailPort: env.MAIL_PORT,
    mailUser: env.MAIL_USER,
    mailPass: env.MAIL_PASS,
};
