//Fazer um programa que diga se o número é par ou impar. (3 Maneiras de fazer)

function parOuImpar(numero){
    let resto = numero % 2;
    if(resto % 2 == 0)
        console.log("parOuImpar(" + numero + "): O número é par. if(resto % 2 == 0)");
    else if(numero)
        console.log("parOuImpar(" + numero + "): O número é impar. if(resto % 2 == 0)");
}

function parOuImpar1(numero){
    if(numero % 2 === 0)
        console.log("parOuImpar(" + numero + "): O número é par. if(variavel % 2 === 0)");
    else if(numero)
        console.log("parOuImpar(" + numero + "): O número é impar. if(variavel % 2 === 0)");
}

function parOuImpar2(numero){
    if(numero % 2 === 0)
        console.log("parOuImpar(" + numero + "): O número é par. if(variavel % 2 === 0)");
    else if(numero)
        console.log("parOuImpar(" + numero + "): O número é impar. if(variavel % 2 === 0)");
}

//parOuImpar(0);
//parOuImpar(1);
//parOuImpar1(2);
//parOuImpar1(3);
//parOuImpar2(4);
//parOuImpar2(5);

//Qual a diferença entre um número par e um número impar?

//resultado = 9 / 2
//resto = 9 % 2 //Se o resto não for igual a 0, como ocorre neste caso, retorna como falso.

//console.log("9 / 2 = " + resultado + ". Resto = " + resto);

module.exports ={parOuImpar, parOuImpar1, parOuImpar2};

//module.exports = parOuImpar;
//module.exports = parOuImpar1;
//module.exports = parOuImpar2;
