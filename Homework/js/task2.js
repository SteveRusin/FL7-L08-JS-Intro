var euros = prompt('Enter the amount of euros', '');
var dollars = prompt('Enter the amount of dollars', '');
var eurosToUah = (euros * 29.7916).toFixed(2);
var dollarsToUah = (dollars * 26.1114).toFixed(2);
var euroToDollar = (29.7916 / 26.1114).toFixed(2);
alert(euros + ' euros are equal ' + eurosToUah + ' UAH, ' + dollars + ' dollars are equal ' + dollarsToUah + ' UAH, ' + 'one euro is equal ' + euroToDollar + ' dollars.');