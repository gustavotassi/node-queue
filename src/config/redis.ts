import configuration from './configuration';

export default {
    host: configuration.redisHost,
    port: Number(configuration.redisPort),
};
