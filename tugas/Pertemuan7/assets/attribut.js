let texttitle = document.querySelector('h2');
let button = document.querySelector('button');

texttitle.addEventListener('click', updateFontColor);
button.addEventListener('click', updateFontSize);

function updateFontColor() {
    texttitle.style.color = 'red';
}

function updateFontSize() {
    texttitle.style.fontSize = '40';
}