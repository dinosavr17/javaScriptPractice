 const askName = (inputValue) => {
   inputValue = document.getElementById('infoInput').value;
   return inputValue;
}
 const returnInfo = (reply) => {
    reply = document.getElementById('infoArea');
    (askName()) ? reply.value = 'Привет: ' + askName(): alert('Имя не введено');

return reply;
}
const changeColor = () => {
   let blocks = document.getElementsByClassName('wrapper');
   blocks[0].style.backgroundColor = 'beige';
    blocks[1].style.backgroundColor = 'lavender';
    blocks[2].style.backgroundColor = 'cornflowerblue';
   console.log(blocks);
    return blocks;
}
changeColor();