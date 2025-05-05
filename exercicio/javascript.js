//3 funções

function media(a, b, c){
    console.log("media: " +((a+b+c) /3));
}
media(7, 8, 4);

function dobro(x){
    return (x*2);
}

let dobrar = dobro(4);
console.log("Dobro: " +dobrar);

function paroimpar(z){
    if(z %2 == 0){
        return ("o numero " +z+ " é par")

    }else{
        return ("o numero " +z+ " é impar")
    }
}

let impaopa = paroimpar(6);
let paoimpa = paroimpar(7);
console.log(impaopa);
console.log(paoimpa);