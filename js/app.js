let dropDown = document.querySelector('.values_goals');
let drop = document.querySelector('.drop_down');
let bool = true;
dropDown.onclick = () => {
    if (bool == true) {
        bool = false;
        drop.style.transform = 'rotate(90deg)';
        dropDown.style.height = '800px';
    } else {
        bool = true;
        drop.style.transform = 'rotate(0deg)';
        dropDown.style.height = '60px';
    }
}