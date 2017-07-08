//It would be nice to use if else statment for this work because, if D<0 the equation doens't have the solutions. Nevertheless, I have done this work according to condition of the task.
var a = prompt('Enter the "a" value', '');
var b = prompt('Enter the "b" value', '');
var c = prompt('Enter the "c" value', '');
var D = Math.pow(b, 2) - 4 * a * c;
var res1;
var res2;
res1 = (-b + Math.sqrt(D)) / (2 * a);
res2 = (-b - Math.sqrt(D)) / (2 * a);
console.log('The equation "' + a + 'x2 + ' + b + 'x + ' + c + ' = 0" has two solutions: res1= ' + res1 + ' and res2= ' + res2 + '.');