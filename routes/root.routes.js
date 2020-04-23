let rootRouter = require('express').Router();
let mainController = require('../controllers/main.controller');

rootRouter.post('/encrypt', mainController.encrypt)
rootRouter.post('/decrypt', mainController.decrypt)

rootRouter.get('/', (req, res)=>{
    return res.render('index.html');
})

module.exports= rootRouter;