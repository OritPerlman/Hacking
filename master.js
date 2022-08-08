const min1= require('./minion1');
const min2 = require('./minion2');

const main = async (from, to) =>
{
    let hashPassword = min1.getPassword();
    let password;
    let hPassword;
    for (let i=from; i<=to; i++)
    {
        hPassword=min2.findMD5(i);
        if( hashPassword == hPassword)
        {
            password=i;
            {break;}
        }
    }
    console.log(password);
}

module.exports = {main};