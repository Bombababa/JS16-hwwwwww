let currentIndex = 0;
const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.image');

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % images.length;
  } else if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }
  gallery.scrollTo({
    left: images[currentIndex].offsetLeft,
    behavior: 'smooth',
  });
});



const renderButton = document.querySelector('[data-action="render"]');
const destroyButton = document.querySelector('[data-action="destroy"]');
const input = document.querySelector('input');
const boxesContainer = document.getElementById('boxes');

renderButton.addEventListener('click', () => {
  const amount = parseInt(input.value);
  createBoxes(amount);
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = getRandomColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
