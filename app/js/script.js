const btnhamburguer = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');

btnhamburguer.addEventListener('click', function(){
    if(header.classList.contains('open')){ //Close hamburgue menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElements.forEach( function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    } else { // Open hambuerger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElements.forEach( function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
    }
});