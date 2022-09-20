var n = prompt("Quantidade de números: ");
var num;
var soma = 0;
var i = 0;
while(i<n){
i=i+1;
num = parseInt(prompt("Número " + (i) + " :"));
soma = soma + num;
}
console.log("A soma de " + n + " números é " + soma);