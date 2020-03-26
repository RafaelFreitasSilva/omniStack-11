const express = require("express");

const app = express();

app.get("/", (request, response) => {
    // return response.send("Hello World");
    return response.json({
        evento: "Semana OmnisStack 11.0",
        aluno: "Rafael Freitas"
    });

});
app.listen(3333);