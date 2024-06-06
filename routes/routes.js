var express = require("express")
var app = express();
var router = express.Router();

//ETAPA 2 importa o controller 
var HomeController = require("../controllers/HomeController");
var UserController = require("../controllers/UserController");

//ETAPA 3 ADICIONA AO ROUTER E CHAMA O METODO

router.get('/', HomeController.index);
router.post('/user',UserController.create);



module.exports = router;