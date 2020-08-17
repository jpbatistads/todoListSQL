/* Importação do express*/
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routes = require("./src/routes/usuarioRoutes.js")

routes(app);

/*Determinação da rota raiz.*/
app.route("/").get((req, res)=>{
    res.send("API todoList funcionando")
})



/* Algumas portas já são default do sistema o procees env
coloca o servidor para rodar em portas váriaveis*/

const port = process.env.PORT || 3001

app.listen(port);

console.log("Servidor funcionando, na porta: ", port);