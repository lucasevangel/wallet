const http = require("http");

const hostname = "127.0.0.1";
const port = 8081;

const serve = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("content-type" , "text/plain");
    res.end("olá,qualquer coisa");
})

serve.listen(port,hostname, () => { 
    console.log("servidor rodando")

})