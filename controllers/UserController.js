//ETAPA 1 cria-se um metodo 

class UserController{

    async index(req,res){}

    async create(req,res){

        var {email, name,password} = req.body;

        if(email == undefined){
            res.status(400);
            res.json({err:'O e-mail é invalido'}); 
        }
        res.status(200);
        res.send('tudo ok!');

       
   }
}

module.exports = new UserController();