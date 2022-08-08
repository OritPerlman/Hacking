const crypto = require('crypto-js');

const findMD5 = async(string) =>
{
    let hash= await crypto.MD5(string).toString();
    return hash;
}
module.exports={findMD5};