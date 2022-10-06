let dropDown = document.querySelector('.values_goals');
let drop = document.querySelectorAll('.drop_down_logo');
let society = document.querySelector('.society');
let sciencePhilosophy = document.querySelector('.science_philosophy');
let humorIrony = document.querySelector('.humor_irony');
let bool = true;
dropDown.onclick = () => {
    if (bool == true) {
        bool = false;
        drop[0].style.transform = 'rotate(0deg)';
        dropDown.style.height = '60px';
    } else {
        bool = true;
        drop[0].style.transform = 'rotate(90deg)';
        dropDown.style.height = 'auto';
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

let bool3 = true;
sciencePhilosophy.onclick = () => {
    if (bool3 == true) {
        bool3 = false;
        drop[2].style.transform = 'rotate(90deg)';
    } else {
        bool3 = true;
        drop[2].style.transform = 'rotate(0deg)';
    }
}

let bool4 = true;
humorIrony.onclick = () => {
    if (bool4 == true) {
        bool4 = false;
        drop[3].style.transform = 'rotate(90deg)';
    } else {
        bool4 = true;
        drop[3].style.transform = 'rotate(0deg)';
    }
}