const three_bar_Icon = document.querySelector('.three_bar_Icon');
const menu = document.querySelector('.menu');
let toggled = false

three_bar_Icon.addEventListener('click', ()=>{
    if (toggled) {
        toggled = false;
        menu.style.display = 'block'
    }else{
        toggled = true;
        menu.style.display = 'none'
    }
} )