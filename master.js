const min1= require('./minion1');
const min2 = require('./minion2');
const min3 = require('./minion3');
const min4 = require('./minion4');

const main = async (from, to) =>
{
    let mini2, mini3, mini4, sum;
    sum = to-from;
    let hashPassword= min1.getPassword();
    mini2= min2.minion2(from, from+(sum/3), hashPassword);
    mini3= min3.minion3(from+(sum/3), to-(sum/3), hashPassword);
    mini4= min4.minion4(to - (sum/3), to, hashPassword);
    if(mini2 != false)
    {
        console.log("The password is:" + mini2);
    }
    else if (mini3 != false)
    {
        console.log("The password is:" + mini3);
    }
    else if (mini4 != false)
    {
        console.log("The password is:" + mini4);
    }
    else if (mini2 == false && mini3 == false && mini4 == false)
    {
        console.log("Sorry, The password is not in the range of numbers received");
    }
}
module.exports = {main};