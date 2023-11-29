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


const sectors = document.querySelectorAll('.sector');

// Добавляем слушателей событий на каждый сектор
sectors.forEach(sector => {
  sector.addEventListener('mouseenter', () => {
    // Изменяем значения свойств сектора при наведении
    sector.style.zIndex = '1';
    sector.style.width = '100%';
  });

  sector.addEventListener('mouseleave', () => {
    // Возвращаем исходные значения свойств сектора при убирании курсора мыши
    sector.style.zIndex = '0';
    sector.style.width = '25%'
  });
});
