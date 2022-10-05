let dropDown = document.querySelector('.values_goals');
let drop = document.querySelectorAll('.drop_down');
let society = document.querySelector('.society');
let bool = true;
dropDown.onclick = () => {
    if (bool == true) {
        bool = false;
        drop[0].style.transform = 'rotate(90deg)';
        dropDown.style.height = 'auto';
    } else {
        bool = true;
        drop[0].style.transform = 'rotate(0deg)';
        dropDown.style.height = '60px';
    }
}
let bool2 = true;
society.onclick = () => {
    if (bool2 == true) {
        bool2 = false;
        drop[1].style.transform = 'rotate(90deg)';
    } else {
        bool2 = true;
        drop[1].style.transform = 'rotate(0deg)';
    }
}