const checkBox = document.getElementById('chk');

checkBox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});