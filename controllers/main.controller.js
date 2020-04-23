const tripledes = require('../tripledes');

const encrypt = (req, res, next) => { 
    let plainText = req.body.plainText;
    let key = req.body.key;

    let cipherText = tripledes.encrypt(plainText, key);
    res.jsonp(cipherText);
}
const decrypt = (req, res, next) => {
    let cipherText = req.body.cipherText;
    let key = req.body.key;

    let plainText = tripledes.decrypt(cipherText, key);
    res.jsonp(plainText)
}
module.exports.encrypt = encrypt;
module.exports.decrypt = decrypt;