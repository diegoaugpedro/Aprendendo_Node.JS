const express = require("express");
const app = express();

app.listen(3500, function(){
    console.log("Aqui temos uma função de CALLBACK sendo executada. Status: Server Online")
});

console.log("Servidor rodando...");