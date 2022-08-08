const jFile = require('jsonfile');

const getHashPassword = () =>
{
    return new Promise ((resolve, reject)=>
    {
        jFile.readFile(__dirname + "./file.json", function (err,data)
        {
            if (err)
            {
                reject(err)
            }
            else
            {
                resolve(data);
            }
        })
    })
}

module.exports= {getHashPassword};