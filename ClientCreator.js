module.exports = class ClientCreator {
    constructor({ prefix, url }) {
        if (!prefix || !url) throw Error('missing in memory arguments');

        /** creating inmemory client */
        this.redisClient = require('./redis-client').createClient({ prefix, url });
    }

    async call(fn, args) {
        try{
            let res = await this.redisClient.call(`${fn}`, JSON.stringify(args));
            return JSON.parse(res);
        } catch(err) {
            return err.message;
        }
    }
}