let reply = document.getElementById('commentArea')
let error = document.getElementById('errorCommentArea')
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let phoneInput = document.getElementById('phone');
let passwordInput = document.getElementById('password');
let confirmPasswordInput = document.getElementById('confirm-password');
function validateEmail(email) {
    const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email);
}
function validatePhone(phoneNumber) {
    const phoneRegex = /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/;
    return phoneRegex.test(phoneNumber);
}
handleClick = () => {
    //Можно было бы решить поставив атрибут required
    if((nameInput.value==='')||(emailInput.value==='')||(phoneInput.value === '')
        ||(passwordInput.value==='')||(confirmPasswordInput.value==='')){
        error.innerHTML = 'Заполните все поля'
    }
    else if (!validateEmail(emailInput.value))  {
        error.innerHTML = 'Некорректный email'
    }
    else if (passwordInput.value!==confirmPasswordInput.value)  {
        alert('Пароли должны совпадать');
        error.innerHTML = 'Пароли должны совпадать'
    }
    else if (!validatePhone(phoneInput.value)) {
        error.innerHTML = 'Некорректный номер телефона'
    }
    else {
        reply.innerHTML = '欢迎光临' + ' '+ nameInput.value;
    }
}
