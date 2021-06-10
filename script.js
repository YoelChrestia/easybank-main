const $btn__nav = document.getElementById('btn__nav');
const $hamburger = document.getElementById('hamburger');
const $cruz = document.getElementById('cruz');
const $desplegable__contain = document.getElementById('desplegable__contain');
const $desplegable = document.getElementById('desplegable');

$btn__nav.addEventListener('click', () => {
    $hamburger.classList.toggle('display__none');
    $cruz.classList.toggle('display__none');
    $desplegable__contain.classList.toggle('display__visible');
    $desplegable.classList.toggle('display__visible');
    $desplegable.classList.toggle('display__none');
})
