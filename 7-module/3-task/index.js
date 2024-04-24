export default class StepSlider {
  elem = null;
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.elem = this.#render();
  }

  #createSlide() {
    let steps = [];

    for (let i = 0; i < this.steps; i++) {
      if (i === this.value) {
        steps.push(`<span class="slider__step-active"></span>`);
      } else {
        steps.push(`<span></span>`);
      }
    }

    return steps;
  }

  #template() {
    return `
    <div class="slider__thumb">
      <span class="slider__value">${this.value}</span>
    </div>
    <div class="slider__progress"></div>
    <div class="slider__steps">
    ${
      this.#createSlide().join('\n')
    }
    </div>
    </div>`;
  }

  #setSliderStep(num) {
    let sliderSteps = this.elem.querySelectorAll('.slider__steps span');

    sliderSteps.forEach((step, index) => {
      if (step.matches('.slider__step-active')) {
        step.classList.remove('slider__step-active');
      }

      if (index === num - 1) {
        step.classList.add('slider__step-active');
      }
    });
  }

  #onChangeValue = (e) => {
    let thumb = this.elem.querySelector('.slider__thumb');
    let progress = this.elem.querySelector('.slider__progress');
    let value = this.elem.querySelector('.slider__value');
    let left = e.clientX - this.elem.getBoundingClientRect().left;
    let leftRelative = left / this.elem.offsetWidth;
    let segments = this.steps - 1;
    this.value = Math.round(leftRelative * segments);
    let valuePercents = this.value / segments * 100;

    value.textContent = this.value;
    thumb.style.left = `${valuePercents}%`;
    progress.style.width = `${valuePercents}%`;
    this.#setSliderStep(this.value)

    const event = new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
      detail: this.value, // значение 0, 1, 2, 3, 4
      bubbles: true // событие всплывает - это понадобится в дальнейшем
    });

    this.elem.dispatchEvent(event);
  }

  #render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('slider');
    this.elem.innerHTML = this.#template();
    this.elem.querySelector('.slider__progress').style.width = `${this.value}`

    this.elem.addEventListener('click', this.#onChangeValue);

    return this.elem;
  }
}
