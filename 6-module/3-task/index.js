import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  elem = null;

  constructor(slides) {
    this.slides = slides;
    this.elem = this.#render();
  }

  #createButtons() {
    return `
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
    `;
  }

  #template(data) {
    const slide =
      createElement(`<div class="carousel__slide" data-id="${data.id}">
    <img src="/assets/images/carousel/${data.image}" class="carousel__img" alt="slide">
    <div class="carousel__caption">
      <span class="carousel__price">€${data.price}></span>
      <div class="carousel__title">${data.name}</div>
      <button type="button" class="carousel__button">
        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
    </div>
    </div>`);

    return slide;
  }

  #initCarousel() {
    const container = this.elem.querySelector(".carousel__inner");
    const buttonNext = this.elem.querySelector(".carousel__arrow_right");
    const buttonPrev = this.elem.querySelector(".carousel__arrow_left");
    const slides = this.elem.querySelectorAll(".carousel__slide");
    let count = 0;

    if (count === 0) {
      buttonPrev.style.display = "none";
    }

    buttonNext.addEventListener("click", () => {
      count++;

      container.style.transform = `translateX(-${slides[0].offsetWidth * count}px)`;

      if (count > 0) {
        buttonPrev.style.display = "";
      }

      if (count === slides.length - 1) {
        buttonNext.style.display = "none";
      }
    });

    buttonPrev.addEventListener("click", () => {
      count--;

      container.style.transform = `translateX(-${slides[0].offsetWidth * count}px)`;

      if (count < slides.length - 1) {
        buttonNext.style.display = "";
      }

      if (count === 0) {
        buttonPrev.style.display = "none";
      }
    });
  }

  #createCarousel() {
    const carousel = document.createElement("div");
    carousel.classList.add("carousel__inner");

    const arrSlides = this.slides.map((slide) => this.#template(slide));
    carousel.append(...arrSlides);

    return carousel;
  }

  #onClickAdd() {
    const buttons = this.elem.querySelectorAll(".carousel__button");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.closest(".carousel__slide").dataset.id;
        console.log(targetId);

        const event = new CustomEvent("product-add", {
          bubbles: true,
          detail: targetId,
        });

        button.dispatchEvent(event);
      });
    });
  }

  #render() {
    this.elem = document.createElement("div");
    this.elem.classList.add("carousel");

    this.elem.insertAdjacentHTML("beforeend", this.#createButtons());

    this.elem.append(this.#createCarousel());

    this.#initCarousel();
    this.#onClickAdd();

    return this.elem;
  }
}
