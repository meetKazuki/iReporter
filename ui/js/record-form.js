let displayModal = document.getElementById('display-modal');
let btnModal = document.getElementById('button-modal');
let closeModal = document.getElementById('close-button');

btnModal.addEventListener('click', () => {
  displayModal.style.display = 'block';
  console.log('Working...');
});

closeModal.addEventListener('click', () => {
  displayModal.style.display = 'none';
});
