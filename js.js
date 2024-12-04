//1

document.addEventListener('keydown', function(event) {
    const gallery = document.querySelector('.gallery');
    const images = document.querySelectorAll('.image');
    let currentIndex = Array.from(images).findIndex(img => img === document.querySelector('.image.active'));
  
    if (currentIndex === -1) {
      currentIndex = 0; 
    }
  
    if (event.key === 'ArrowRight') {
    
      currentIndex = (currentIndex + 1) % images.length;
    } else if (event.key === 'ArrowLeft') {
     
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
  
    
    images.forEach(img => img.classList.remove('active'));
    images[currentIndex].classList.add('active');
    gallery.scrollLeft = images[currentIndex].offsetLeft - (gallery.offsetWidth / 2) + (images[currentIndex].offsetWidth / 2);
  });



//2



const renderButton = document.getElementById('render-button');
const destroyButton = document.getElementById('destroy-button');
const boxesContainer = document.getElementById('boxes');
const inputBox = document.getElementById('input-boxes');


function createBoxes(amount) {

  boxesContainer.innerHTML = '';
  

  for (let i = 1; i <= amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;  
    const randomColor = getRandomColor();  

   
    box.classList.add('box');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = randomColor;

 
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


renderButton.addEventListener('click', () => {
  const amount = parseInt(inputBox.value);
  if (amount && amount > 0) {
    createBoxes(amount);
  } else {
    alert('Введіть коректну кількість!');
  }
});

destroyButton.addEventListener('click', destroyBoxes);
