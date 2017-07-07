var a = prompt('Enter the "a" value', '');
var b = prompt('Enter the "b" value', '');
var c = prompt('Enter the "c" value', '');
var D = Math.pow(b, 2) - 4 * a * c;
var res1;
var res2;
if (D > 0) {
    res1 = (-b + Math.sqrt(D)) / (2 * a);
    res2 = (-b - Math.sqrt(D)) / (2 * a);
    console.log('The equation "' + a + 'x2 + ' + b + 'x + ' + c + ' = 0" has two solutions: res1= ' + res1 + ' and res2= ' + res2 + '.');
} else if (D === 0) {
    res1 = -(b / (2 * a));
    console.log('The equation "' + a + 'x2 + ' + b + 'x + ' + c + ' = 0" has only the one solution: res1=res2= ' + res1 + '.');
} else if (D < 0) {
    console.log('The D of the equation "' + a + 'x2 + ' + b + 'x + ' + c + ' = 0" < 0. The equation does not have the solution.');
};