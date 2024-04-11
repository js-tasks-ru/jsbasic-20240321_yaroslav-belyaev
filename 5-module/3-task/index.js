function initCarousel() {
  // ваш код...
  const container = document.querySelector('.carousel__inner');
  const buttonNext = document.querySelector('.carousel__arrow_right');
  const buttonPrev = document.querySelector('.carousel__arrow_left');
  const slides = document.querySelectorAll('.carousel__slide');
  const slide = slides[0].offsetWidth;
  let count = 0;

  if (count === 0) {
    buttonPrev.style.display = 'none';
  }

  buttonNext.addEventListener('click', () => {
    count++;
    container.style.transform = `translateX(-${slide * count}px)`;

    if (count > 0) {
      buttonPrev.style.display = '';
    }

    if (count === slides.length - 1) {
      buttonNext.style.display = 'none';
    }
  });

  buttonPrev.addEventListener('click', () => {
    count--;

    container.style.transform = `translateX(-${slide * count}px)`;

    if (count < slides.length - 1) {
      buttonNext.style.display = '';
    }

    if (count === 0) {
      buttonPrev.style.display = 'none';
    }
  });
}
