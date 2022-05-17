/*const{createServer}=require('http');
let server = createServer((request,response)=>{
    response.writeHead(200,{"Content_Type":"text/html"});
    response.write('<h1>Olá mundo</h1><p>Projeto</p>');
    response.end();
});
server.listen(8000);
console.log("Projeto Iniciado");*/
let express = require('express');
let app = express();

app.get('/',function(req,res){
    res.send('ROTA GET')
});

app.get('/apresentar',function(req,res){
    //res.send('rota 1');
    let param2 = req.query.n1;
    let param3 = req.query.n2;
    let soma = parseInt(param2) + parseInt(param3);
    res.send("Resultado: " + soma);
});
app.get('/cadastrar',function(req,res){
    res.json(req.query);
});

app.listen(4000,function(){
    console.log("Projeto iniciado na porta 4000")
});