const express = require("express");
const app = express();

/* === Rotas com valores fixos === */
app.get("/", function(req, res){
    res.send("Essa é a rota para página principal");
});

app.get("/Rota_01", function(req, res){
    res.send("Essa é a rota de número 01!");
});

app.get("/Rota_02", function(req, res){
    res.send("Essa é a rota de número 02!");
});

/* === Rota com valores dinâmicos === */
app.get("/hello/:nome/:sobrenome", function(req, res){
    res.send("Olá, " +
        req.params.nome +
        req.params.sobrenome);
});

app.listen(3500, function(){
    console.log("Aqui temos uma função de CALLBACK sendo executada. Utilizada para informar o stadus do servidor. Status: Server Online")
});