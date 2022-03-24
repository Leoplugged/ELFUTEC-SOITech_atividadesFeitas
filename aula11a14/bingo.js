//..:: Índice ::..
//1. Criar um vetor Cartela (array).
//1.a Gerar número aleatório;
//1.b Verificar se número aleatório não está repetido e salva número na Cartela;
//1.c Organizar por ordem crescente os números aleatórios salvos na Cartela.
//2. Criar um vetor para armazenar Números Sorteados;
//2.a Gerar número de Sorteio por intervalo;
//2.b Conferir se número sorteado existe no vetor Números Sorteados.
//3. Conferir Cartela;


//1. Gerar a Cartela (array);
let cartela=[];
//let pares=[];
//let impares=[];

//1.a Gerar número aleatório entre 1 a 75;
function gerarNumeroAleatorio2(min,max){
    return Math.ceil(Math.random()*(max-min));
}

//1.b Verificar se número aleatório não está repetido e salva número na Cartela, usando loop de repetição (laço de repetição)
for(let i=0;i<25;i++){ //i é um número e tem loop de repetição em 25x.
    let numeroAleatorio=gerarNumeroAleatorio2(1,75);
    //Quando o .indexOf não localiza mesmo elemento numa array, retorna o valor -1 e então salva no array.
    if(cartela.indexOf(numeroAleatorio)===-1)//{
        cartela.push(numeroAleatorio);
    //if(numeroAleatorio%2===0) -> identifica se é divisível por 2
    //    pares.push(numeroAleatorio);
    //else
    //    impares.push(numeroAleatorio);
    //}
}

//1.c Organizar por ordem crescente os números aleatórios salvos na Cartela para informar.
console.log("Cartela",cartela.sort(function(a,b){return a-b}));
//console.log("Pares", pares.sort(function(a, b){return a - b}));
//console.log("Impares", impares.sort(function(a, b){return a - b}));

//2. Criar um vetor para armazenar Números Sorteados;
let numerosSorteados=[];

//2.a Gerar número de Sorteio por intervalo;
function sorteio(){
    let intervalo=setInterval(function(){
        let numeroSorteado=gerarNumeroAleatorio2(1,75);
        let numeroExiste=numerosSorteados.indexOf(numeroSorteado)!==-1;

        //2.b Verificar se número de sorteio existe no vetor Números Sorteados. Se não, salva, senão roda o loop novamente;
        if(numeroExiste===false)
            numerosSorteados.push(numeroSorteado);
        else{
            while(numeroExiste===true){
                numeroSorteado=gerarNumeroAleatorio2(1,75);
                numeroExiste=numerosSorteados.indexOf(numeroSorteado)!==-1;
                if(numeroExiste===false)
                    numerosSorteados.push(numeroSorteado);
            }
        }

        console.log("Números Sorteados",numerosSorteados);
        console.log("Tamanho",numerosSorteados.length);

        //3. Conferir Cartela;
        conferirCartela(intervalo);

        if(numerosSorteados.length===75)
            clearInterval(intervalo);
    }, 1000)
}

function conferirCartela(intervalo){
    if(numerosSorteados.length<25)
        return false;

    let ganhouBingo=true;
    let quantidadeNumerosSorteados=0;

    numerosSorteados.forEach(function(sorteado){
        cartela.forEach(function(meuNumero){
            if(sorteado==meuNumero){
                ganhouBingo=true;
                quantidadeNumerosSorteados++;
            }
        })
    })

    if(quantidadeNumerosSorteados==cartela.length){
        console.log("Parabéns! Você ganhou o bingo!");
        clearInterval(intervalo);
    }else
        console.log("Você ainda não chegou lá! Faltam "+(cartela.length-quantidadeNumerosSorteados)+" números.");
}

sorteio();