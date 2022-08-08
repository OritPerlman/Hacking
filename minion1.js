const DAL = require('./fileDAL');

const getPassword = async() =>
{
    let password= await DAL.getHashPassword();
    return password;
}

module.exports={getPassword};