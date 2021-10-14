import dotenv from 'dotenv';

dotenv.config();

const env = process.env;

export default {
    port: Number(env.PORT),
    mailHost: env.MAIL_HOST,
    mailPort: env.MAIL_PORT,
    mailUser: env.MAIL_USER,
    mailPass: env.MAIL_PASS,
    redisHost: env.REDIS_HOST,
    redisPort: Number(env.REDIS_PORT),
};
