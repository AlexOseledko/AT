// Vendors
// import Swiper, { Navigation, Pagination } from 'swiper';
import * as Bootstrap from 'bootstrap';

// Custom
import * as flsFunctions from './modules/functions.js'


flsFunctions.isWebp();
// const swiper = new Swiper()


(function stickBtnToggle() {
    const apperBtn = document.querySelector('.apper-btn');
    const className = 'show';
    const position = 1000;

    if (!apperBtn) return;

    function toggleFunc() {
        if (scrollY >= position) apperBtn.classList.add(className);
        else apperBtn.classList.remove(className);
    }

    toggleFunc();
    window.addEventListener('scroll', toggleFunc);
})();


(function sendForm() {
    const form = document.querySelector('#main-form');
    if (!form) return;

    const preloader = document.querySelector('.preloader');
    const inputs = form.querySelectorAll('*');
    
    form.addEventListener('submit', e => {
        e.preventDefault();
        inputs.forEach(el => {
            el.setAttribute('disbled', 'disbled');
        })
        preloader.classList.add('active');
    })
})();


