var n = prompt("Número de termos:");
var a = 0;
var b = 1;
var i = 2;
var c;
if (n == 1) {
    document.write(a);
} else {
    console.log(a + ", " + b);
}
while (i < n) {
	i = i + 1;
    c = a + b;
    console.log(", " + c);
    a = b;
    b = c;
}
