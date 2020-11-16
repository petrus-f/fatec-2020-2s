const express = require('express');
const app = express();
// function teste(request, response) { 
//     response.send("<h1>Teste de Pagina</h1>");
// }

app.use(express.static('./public'));

app.set('view engine', 'hbs');

const teste = (request, response) => {
    console.log("Função anonima");
    response.send("<h1>Teste de página com função anônima</h1>")
}



app.get("/teste", teste);

app.get("/bomdia", (request, response) => { 
    const agora = Date();
    response.render("teste", {nome: agora});
    
})

// function callback() { 
//     console.log("Servidor iniciado");
// }

app.listen(80, () => {
    console.log("Servidor iniciado");
});