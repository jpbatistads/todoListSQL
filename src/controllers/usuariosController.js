/*Funções da aplicação*/

const { response } = require("express");

/*Acesso ao banco,verificação etc..*/
exports.listAll = (req, res) =>{
    let usuarios = [
        {
            nome: "teste 01",
            email: "teste01@mail.com"
        },
        
        {
            nome: "teste 02",
            email: "teste02@mail.com"
        }
    ]
    res.send(usuarios);
}

/*Função para criar os usuários (Exportes para ser enxergada)*/
exports.createone = (req, res) =>{
    let response = {
        message: "Usuário criado com sucesso",
        data: req.body
    }
    res.send(response)
}