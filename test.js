const AxionRedis = require('./index');
const oyster = new AxionRedis.Oyster({ url: "redis://127.0.0.1:6379", prefix: "none" });

oyster.call('add_block',{
    _label: 'comments',
    _id: '12345',
    _hosts: ['school:019029'],
    _members: ['hoppies:039049'],
    fullname: 'bahi hussein abdel baset',
    lastname: 'ismail',
    label: 'vodo',
    hoppies: 'flying',
    ok: ['3', '3', '3', '123'],
    tom: {
        cort: {
            r: 0.123,
            x: 'will be deleted'
        }
    },
    experince: {
        dog_years: 154
    }
}).then((a) => {console.log(a)})


