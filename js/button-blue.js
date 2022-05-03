document.querySelector('.mekalades').addEventListener('click', (evt) => {
    evt.target.classList.add('progruzka')
    setTimeout(() => {
    evt.target.classList.remove('progruzka')
    }, 3000);
    evt.target.classList.add('send')
    setTimeout(() => {
    evt.target.classList.remove('.mekalades')
    }, 3000);
  })