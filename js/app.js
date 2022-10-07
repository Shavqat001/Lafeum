let dropDown = document.querySelector('.values_goals'),
    drop = document.querySelectorAll('.drop_down_logo'),
    society = document.querySelector('.society'),
    sciencePhilosophy = document.querySelector('.science_philosophy'),
    humorIrony = document.querySelector('.humor_irony');

let bool = true;
let bool2 = true;
let bool3 = true;
let bool4 = true;

dropDown.onclick = () => {
    if (bool == true) {
        bool = false;
        drop[0].style.transform = 'rotate(0deg)';
        dropDown.style.height = '80px';
    } else {
        bool = true;
        drop[0].style.transform = 'rotate(90deg)';
        dropDown.style.height = 'auto';
    }
}

society.onclick = () => {
    if (bool2 == true) {
        bool2 = false;
        drop[1].style.transform = 'rotate(90deg)';
    } else {
        bool2 = true;
        drop[1].style.transform = 'rotate(0deg)';
    }
}

sciencePhilosophy.onclick = () => {
    if (bool3 == true) {
        bool3 = false;
        drop[2].style.transform = 'rotate(90deg)';
    } else {
        bool3 = true;
        drop[2].style.transform = 'rotate(0deg)';
    }
}

humorIrony.onclick = () => {
    if (bool4 == true) {
        bool4 = false;
        drop[3].style.transform = 'rotate(90deg)';
    } else {
        bool4 = true;
        drop[3].style.transform = 'rotate(0deg)';
    }
}