const navUl = document.querySelector('.nav-container');
const menu = document.querySelector('.fa-bars');
const navLi = document.querySelectorAll('.nav-container>li');
const header = document.querySelector('header');
const heading = document.querySelector('h1');
const headerWrapper = document.querySelector('header.wrapper');

for (let i = 0; i < navUl.children.length; i++) {
    navUl.children[i].addEventListener('mouseover', function (e) {
        e.target.style.color = 'yellow';
        e.target.style.fontSize = '1.2rem';
    });
    navUl.children[i].addEventListener('mouseout', function (e) {
        e.target.style.color = 'white';
        e.target.style.fontSize = '1rem';
    });
}

if (navUl.offsetWidth < 300) {
    menu.style.visibility = 'visible';
    for (let i = 0; i < navLi.length; i++) {
        navLi[i].style.display = 'none';
    }
    menu.addEventListener('click', function () {
        menu.style.visibility = 'hidden';
        navUl.style.flexDirection = 'column';
        heading.style.display = 'none';

        for (let i = 0; i < navLi.length; i++) {
            navLi[i].style.display = 'block';
        }
    });
}