import configuration from './configuration';

export default {
    host: configuration.mailHost,
    port: configuration.mailPort,
    auth: {
        user: configuration.mailUser,
        pass: configuration.mailPass,
    },
};
