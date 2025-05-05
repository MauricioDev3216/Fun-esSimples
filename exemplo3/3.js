//função arrow

const sacanear = (nome) =>{
    return "receba " +nome+ " seu bobão"
}
console.log(sacanear("luis"));

const arriar =() =>{
    alert("este é um arrow function")
}
arriar();
const numeros = [1, 2, 3, 4, 5];
const dobrar = numeros.map(n => n*2);
console.log(dobrar);

//filtrar pessoas com mais de 5 letras

const palavras = ["sol","javascript","lua","computador","if"];
const longas = palavras.filter(palavras => palavras.length>5);
console.log(longas);

//somar todos os numeros

const valores = [10, 20, 30, 40]
const soma = valores.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(soma);

//ordenar nomes por ordem alfabetica

const nomes = ["carlos", "ana", "pedro", "bianca"];
const ordenados = nomes.sort((a,b) => a.localeCompare(b));
console.log(ordenados);
