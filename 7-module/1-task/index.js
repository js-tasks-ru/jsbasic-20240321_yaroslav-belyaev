import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  elem = null;
  constructor(categories) {
    this.categories = categories;

    this.elem = this.#render();
  }

  #createButtons() {
    return `
    <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    `;
  }

  #template() {
    return `
     <nav class="ribbon__inner">
      ${
           this.categories.map((item) => `<a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>`).join('\n')
      }
    </nav>
    `;
  }

  #initScroll() {
    const menu = this.elem.querySelector('.ribbon__inner');
    const buttonRight = this.elem.querySelector('.ribbon__arrow_right');
    const buttonLeft = this.elem.querySelector('.ribbon__arrow_left');

    buttonRight.addEventListener('click', () => {
      menu.scrollBy(350, 0);
    });

    buttonLeft.addEventListener('click', () => {
      menu.scrollBy(-350, 0);
    });

    menu.addEventListener('scroll', () => {
      let scrollLeft = menu.scrollLeft;
      let scrollWidth = menu.scrollWidth;
      let clientWidth = menu.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      if (scrollLeft === 0) {
        buttonLeft.classList.remove('ribbon__arrow_visible');
      } else {
        buttonLeft.classList.add('ribbon__arrow_visible');
      }

      if (scrollRight < 1) {
        buttonRight.classList.remove('ribbon__arrow_visible');
      } else {
        buttonRight.classList.add('ribbon__arrow_visible');
      }
    });
  }

  #selectMenu = (e) => {
    e.preventDefault();
    const target = e.target.closest('.ribbon__item');

    this.elem.querySelector('.ribbon__item_active').classList.remove('ribbon__item_active');

    target.classList.add('ribbon__item_active');

    const state = new CustomEvent('ribbon-select', {
      detail: target.dataset.id,
      bubbles: true
    });

    this.elem.dispatchEvent(state);
  }


  #render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('ribbon');

    this.elem.innerHTML = this.#template();
    this.elem.insertAdjacentHTML('beforeend', this.#createButtons());

    this.#initScroll();
    const items = this.elem.querySelectorAll('.ribbon__item');
    items[0].classList.add('ribbon__item_active');

    items.forEach((item) => {
      item.addEventListener('click', this.#selectMenu);
    });

    return this.elem;
  }

}
