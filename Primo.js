var N = parseInt(prompt("Quantidade de números:"));
var X; 
var cont;
for (var i = 0; i < N; i++) {
    cont = 0;
X = parseInt(prompt("Quais os números?"));
for (var j = 2; j < X; j++) {
    if (X % j === 0) 
        cont++;
}
if (cont === 0)
    console.log(X + " é primo/ ");
          else 
            console.log(X + " não é primo/ ");
}