let value;
let secondValue;
function addValues(result) {
    value = prompt('Введите число', '');
    secondValue = prompt('Введите второе число', '' );
    result =((isNaN(+value)) || (isNaN(+secondValue))) ? 'Вы ввели не числа' :
        (+value + +secondValue);
    alert(result);
}
function removeValues(result) {
    value = prompt('Введите число', '');
    secondValue = prompt('Введите второе число', '' );
    result =((isNaN(+value)) || (isNaN(+secondValue))) ? 'Вы ввели не числа' :
        (+value - +secondValue);
    alert(result);
}
function divideValues(result) {
    value = prompt('Введите число', '');
    secondValue = prompt('Введите второе число', '' );
    if (+secondValue===0) {
        alert('На ноль делить нельзя')
    }
    else {
     result =((isNaN(+value)) || (isNaN(+secondValue))) ? 'Вы ввели не числа' :
        (+value / +secondValue);
        alert(result);
    }
}
function multiplyValues(result) {
    value = prompt('Введите число', '');
    secondValue = prompt('Введите второе число', '' );
    result =((isNaN(+value)) || (isNaN(+secondValue))) ? 'Вы ввели не числа' :
        (+value * +secondValue);
    alert(result);
}