import createElement from "../../assets/lib/create-element.js";

export default class ProductCard {
  elem = null;
  #product = {};
  constructor(product) {
    this.#product = product || this.#product;

    this.elem = this.#render();
  }

  #template() {
    return `
            <div class="card__top">
              <img src="/assets/images/products/${this.#product.image}" class="card__image" alt="product">
              <span class="card__price">€${this.#product.price.toFixed(2)}</span>
            </div>
            <div class="card__body">
              <div class="card__title">${this.#product.name}</div>
                <button type="button" class="card__button">
                  <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                </button>
              </div>
      `;
  }

  #onClickAdd = () => {
    const event = new CustomEvent('product-add', {
      bubbles: true,
      detail: this.#product.id,
    });

    this.elem.querySelector('.card__button').dispatchEvent(event);
  }

  #render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('card');
    this.elem.innerHTML = this.#template();

    this.elem.querySelector('.card__button').addEventListener('click', this.#onClickAdd);

    return this.elem;
  }
}
