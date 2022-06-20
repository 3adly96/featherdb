const ClientCreator = require('./ClientCreator');

module.exports = {
    HyperView: class HyperView  extends ClientCreator{
        async call(fn, args) {
            try{
                let res = await this.redisClient.call(`hyperview_${fn}`, typeof args == 'object' ? JSON.stringify(args) : args);
                return JSON.parse(res);
            } catch(err) {
                return err.message;
            }
        }
    },
    Oyster: class Oyster extends ClientCreator{
        async call(fn, args) {
            try{
                let res = await this.redisClient.call(`oyster_${fn}`, typeof args == 'object' ? JSON.stringify(args) : args);
                return JSON.parse(res);
            } catch(err) {
                return err.message;
            }
        }
    }
}
