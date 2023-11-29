// Первая страница
const homeButton = document.getElementById('home-button');
const tourButton = document.getElementById('tour-button');
const detailsButton = document.getElementById('details-button');

homeButton.addEventListener('click', () => {
  window.location.href = 'index.html';
});

tourButton.addEventListener('click', () => {
  window.location.href = 'second.html';
});

detailsButton.addEventListener('click', () => {
  window.location.href = 'third.html';
});

const greeting = document.querySelector('.title');

window.addEventListener('load', () => {
    greeting.style.transition = 'left 1.5s, opacity 1.5s';
    greeting.style.left = '30px';
    greeting.style.opacity = '1';
});