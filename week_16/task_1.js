let advancedSort =(number,nextNumber)=> {
    if (number > nextNumber) return 1;
    if (number === nextNumber) return 0;
    if (number < nextNumber) return -1;
}
let sumInput = () => {
    let numbers= [];
    let sum = 0;

    while (true) {
        let number = prompt("Введите число", '');
        if ((number===null) || (isNaN(+number)) || (number==='') ) break;
        numbers.push(number);
        sum += +number;

    }
    numbers.sort(advancedSort);
    alert('Элементы: ' + numbers);
    alert( 'Сумма: ' + sum );
};
sumInput();