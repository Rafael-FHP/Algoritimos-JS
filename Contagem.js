var N = parseInt(prompt("Qual o valor de N?"));
var cont = 0;
var cont2 = 0;

for(let i = 0;i<N;i++) {
    var X = parseInt(prompt("Digite um número"))
    if(X%1===0) {
        cont++;
    } if(X>=1) {
        cont++;
    } if(X<=N) {
        cont++;
    }
    if(contador==3) {
        cont2++;
        cont = 0;
    }
}

console.log("Foram digitados " + cont2 + " inteiros");
