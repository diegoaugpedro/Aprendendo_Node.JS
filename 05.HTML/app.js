const express = require("express");
const app = express();

/* === Rotas carregando arquivos === */
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/sobre.html");
});

app.get("/contato", function(req, res){
    res.sendFile(__dirname + "/contato.html");
});

app.listen(3500, function(){
    console.log("Aqui temos uma função de CALLBACK sendo executada. Utilizada para informar o stadus do servidor. Status: Server Online")
});