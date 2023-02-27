'use strict';

// Riferimenti HTML
const imgCol = document.querySelector('.col-lg');
const previousBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Creo un array che contiene il nome delle immagini
const images = ['01', '02', '03', '04', '05'];

// Conservo in una variabile l'attuale indice dell'immagine visualizzata
let actualImgIndex = 0;

// Creo la variabile che conterrà l'html delle img
let carouselContent = "";

// Creo l'HTML per ogni immagine
for (let i = 0; i < images.length; i++) {
    carouselContent += `<img src="img/0${i + 1}.webp" alt="carusel-photo" class="carusel-photo d-none">`;
}

// Assegno a img col il contenuto di carouselContent
imgCol.innerHTML = carouselContent;

// Prendo tutte le immagini che hanno la classe .carusel-photo e alla prima rimuovo il display none
const carouselImgs = document.querySelectorAll('.carusel-photo');
carouselImgs[actualImgIndex].classList.remove('d-none');

// Rispondo al click del btn next
nextBtn.addEventListener('click',
    function(){
        // Mi assicuro di poter aumentare il valore di actualImgIndex in base al numero delle immagini
        if (actualImgIndex < carouselImgs.length - 1) {
            carouselImgs[actualImgIndex].classList.add('d-none');
            actualImgIndex++;
            carouselImgs[actualImgIndex].classList.remove('d-none');
        } else {
            carouselImgs[actualImgIndex].classList.add('d-none');
            actualImgIndex = 0; // Porto l'indice alla prima immagine
            carouselImgs[actualImgIndex].classList.remove('d-none');
        }
    }
)

// Rispondo al click del btn prev
previousBtn.addEventListener('click',
    function(){
        // Mi assicuro di poter diminuire il valore di actualImgIndex in modo da fermarmi alla prima immagine
        if (actualImgIndex > 0) {
            carouselImgs[actualImgIndex].classList.add('d-none');
            actualImgIndex--;
            carouselImgs[actualImgIndex].classList.remove('d-none');
        } else {
            carouselImgs[actualImgIndex].classList.add('d-none');
            actualImgIndex = carouselImgs.length -1; // Porto l'indice all'ultima immagine
            carouselImgs[actualImgIndex].classList.remove('d-none');
        }
    }
)
