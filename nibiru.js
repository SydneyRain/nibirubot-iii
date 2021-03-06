/*-------------- Modules --------------*/
const { Client }            = require('klasa');
/*-------------------------------------*/
const { config, token }     = require('./config')
const defaultGuildSchema    = require('./schemas/defaultGuildSchema')
const defaultUserSchema     = require('./schemas/defaultUserSchema')
/*-------------------------------------*/

Client.use(require('klasa-dashboard-hooks'));
class KlasaClient extends Client {
    constructor(args) {
        super({...args, defaultGuildSchema, defaultUserSchema});

        this.config = config;
    }
}

new KlasaClient(config).login(token);