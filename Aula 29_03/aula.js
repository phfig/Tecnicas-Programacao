//Funções
function tabuada () {
    var cont = 0;
    while(cont <= 10){
        console.log(6*cont);
        cont++;
    }
}
tabuada();
function tabuada2(num){
    var x = 0;
    while(x <= 10){
        console.log(num*x);
        x++;
    }
}
tabuada2(3);
function desconto(valor){
    var desc = 0.10;
    var novovalor =0;
    return novovalor = valor-(valor*desc);
}
var mensagem = desconto(1500);
console.log(mensagem);
//Exercício 6
function quadrado(){
    var A = 0;
    var lado = 5;
    A= lado*lado
    console.log(A); 
}
quadrado();

//Exercício 7
var nascimento = 1900;
var anoAtual = 2022;

function anos(){
    console.log(anoAtual-nascimento);
}

function meses(){
    console.log((anoAtual-nascimento)*12);
}

function dias(){
    console.log((anoAtual-nascimento)*365);
}
function semanas(){
    console.log((anoAtual-nascimento)*48);
}
anos();
meses();
dias();
semanas();

//Exercício 8

var nota1 = 6;
var nota2 = 9;
var media = (nota1+nota2)/2;
if(media <= 4){
    console.log("Reprovado");
}else if(media > 4 && media <=7){
    console.log("Exame");
}else if(media > 7 && media <= 10){
    console.log("Aprovado");
}else{ console.log("Fora do intervalo");}


