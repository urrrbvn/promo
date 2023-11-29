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


const hawaiiButton = document.getElementById('hawaii-button');
const caribbeanButton = document.getElementById('caribbean-button');
const dubaiButton = document.getElementById('dubai-button');
const alpsButton = document.getElementById('alps-button');
const imageContainer = document.getElementById('image-container');

hawaiiButton.addEventListener('click', () => {
  showImage('https://static.irk.ru/media/img/site/gallery/93/5e2cfa44-5143-432f-8225-baf134c6d268_jpg_740x100000_q85.jpg');
});

caribbeanButton.addEventListener('click', () => {
  showImage('https://images.lucentcms.com/iyc_website/2020/12/5fea07e8729e2-caribbean-luxury-yacht-charter-min.jpg');
});

dubaiButton.addEventListener('click', () => {
  showImage('https://all.accor.com/magazine/imagerie/1-34bc.jpg');
});

alpsButton.addEventListener('click', () => {
  showImage('https://naked-science.ru/wp-content/uploads/2020/11/1397640_original-scaled.jpg');
});

function showImage(src) {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    imageContainer.innerHTML = '';
    imageContainer.appendChild(img);
    imageContainer.style.width = '500px';
    imageContainer.style.height = '500px';
  };
}
