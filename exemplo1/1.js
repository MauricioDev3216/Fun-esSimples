//funcões no java script


//função simples (declarado)

function somar (a,b){
    return (a+b);
}

function mensagem(){
    alert("boa tarde");
}

function calcular(op,x,y){
    if(op==1){
        console.log("soma: " +(x+y));
    }else if(op == 2){
        console.log("subtração: " +(x-y));
    }else if(op == 3){
        console.log("multiplicação: " +(x*y));
    }else{
        if(y!=0){
            console.log("divisão: " +(x/y));
        }else{
            console.log("impossivel dividir por zero");
        }
    }

}
calcular(1, 8, 9)
calcular(2, 22, 11)
calcular(3, 2, 9)
calcular(4, 4, 2)
calcular(4, 4, 0)

//invocando
let resultado = somar(5,3);
console.log("soma: " +resultado);

mensagem();