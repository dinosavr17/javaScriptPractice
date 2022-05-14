 const askName = (inputValue) => {
   inputValue = document.getElementById('infoInput').value;
   return inputValue;
}
 const returnInfo = (reply) => {
    reply = document.getElementById('infoArea');
    (askName()) ? reply.value = 'Привет: ' + askName(): alert('Имя не введено');

return reply;
}