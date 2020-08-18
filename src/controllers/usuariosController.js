const Usuario = require("../models").Usuario

/*Acesso ao banco,verificação etc..*/
exports.listAll = (req, res) =>{
   Usuario.findAll().then(usuarios=>{
    res.send(usuarios);  
   }).catch(error=>{
       
   })
    
}

/*Função para criar os usuários (Exportes para ser enxergada)*/
exports.createone = (req, res) =>{
    console.log(Usuario)
    const {nome,email} = req.body
    Usuario.create({nome,email}).then(usuario=>{
        res.send(usuario)
    }).catch(error=>{
        res.send(error)
    })
    
    
   
}