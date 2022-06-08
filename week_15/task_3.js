let chk = document.getElementById('check');
chk.addEventListener('change', () => {
    let mainWrapper = document.getElementById('wrapper');
    mainWrapper.style.backgroundColor = chk.value;
    if (chk.value === "#fff6ed") {
        mainWrapper.style.color = 'black';
    }
    else if (chk.value === "#161616") {
        mainWrapper.style.color = 'white';
    }
    else if (chk.value === "#94bcff") {
        mainWrapper.style.color = 'blue';
    }
})