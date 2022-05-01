let greeting = 'Привет';
function sendMessage () {
let name = prompt('Как тебя зовут?', '');
name = (name === null) ? 'Аноним' : name ;
let message = greeting + ', ' + name + '!';
alert(message);
}
let value;
let secondValue;
function addValues() {
    value = prompt('Введите число', '');
    secondValue = prompt('Введите второе число', '' );
    let result =((isNaN(+value)) || (isNaN(+secondValue))) ? 'Вы ввели не числа' :
        (+value + +secondValue);
    alert(result);
}
function removeValues() {
    value = prompt('Введите число', '');
    secondValue = prompt('Введите второе число', '' );
    let result =((isNaN(+value)) || (isNaN(+secondValue))) ? 'Вы ввели не числа' :
        (+value - +secondValue);
    alert(result);
}
function divideValues() {
    value = prompt('Введите число', '');
    secondValue = prompt('Введите второе число', '' );
    let result =((isNaN(+value)) || (isNaN(+secondValue))) ? 'Вы ввели не числа' :
        (+value / +secondValue);
    alert(result);
}
function multiplyValues() {
    value = prompt('Введите число', '');
    secondValue = prompt('Введите второе число', '' );
    let result =((isNaN(+value)) || (isNaN(+secondValue))) ? 'Вы ввели не числа' :
        (+value * +secondValue);
    alert(result);
}
