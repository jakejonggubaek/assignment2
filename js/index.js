const rightButton = document.querySelector('.fa-chevron-right');
const leftButton = document.querySelector('.fa-chevron-left');
const galleryOne = document.querySelector('.page-one');
const galleryTwo = document.querySelector('.page-two');


rightButton.addEventListener('click', function(){
    galleryOne.classList.toggle('hidden');
    galleryTwo.classList.toggle('hidden');
    rightButton.classList.toggle('hidden');
    leftButton.classList.toggle('hidden');
});

leftButton.addEventListener('click', function (){
    galleryOne.classList.toggle('hidden');
    galleryTwo.classList.toggle('hidden');
    rightButton.classList.toggle('hidden');
    leftButton.classList.toggle('hidden');
});

