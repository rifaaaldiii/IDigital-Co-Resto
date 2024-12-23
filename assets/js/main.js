const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 80);
});

let menu = document.querySelector('#menu__icon');
let navlist = document.querySelector('.nav__list');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
});

sr.reveal('.home__text', {delay: 300});
sr.reveal('.home__img', {delay: 400});
sr.reveal('.container', {delay: 200});

sr.reveal('.about__img', {});
sr.reveal('.about__text', {delay: 300});

sr.reveal('.middle__text', {});
sr.reveal('.row__btn,.shop__content', {delay: 300});

sr.reveal('.reveiw__content,.contact', {delay: 300});


