// elements
let image = document.getElementById('img');
let plus_btn = document.getElementById('plus');
let minus_btn = document.querySelector('.minus');
let card = document.querySelector('.card');

card.classList.add('active');
image.classList.add('preview-image');

// global variables
let initialPadding = 100;
let initialWidth = 200;
let imageInitialX = 40;
let scale = 1;
let isImageOpen = true;

// actions
plus_btn.addEventListener('click', (e) => Plus());
minus_btn.addEventListener('click', (e) => Minis());
image.addEventListener('click', (e) => imageFn());
