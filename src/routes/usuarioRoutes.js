/* Precisamos exportar este arquivos para que ele
possa ser enchergado por outros arquivos*/

/* Na rotas é oque vou mostrar da minha aplicação*/

module.exports = function(app){
    const usuarios = require("../controllers/usuariosController.js")
    app.route("/usuarios")
    .get(usuarios.listAll)
    .post(usuarios.createone)
}