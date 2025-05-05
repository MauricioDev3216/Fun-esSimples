//função anonima (atribuida a variavél)

const multiplicar = function (a,b){
    return a*b;
}

let resultado = multiplicar(4,2);
console.log("multiplicação: " +resultado);

const saudar = function (nome){
    return ("Olá " +nome+ "!")
}
console.log(saudar("xiru"))

const exibir = function(mensagem){
    alert("mensagem: " +mensagem)

}
exibir("seja bem vindo")

const verHoraAtual = function(){
    return new Date().toLocaleTimeString();
}
console.log("agora são " +verHoraAtual());
