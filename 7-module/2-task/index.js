import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  elem = null;
  constructor() {
    this.elem = this.render();
  }

  #template() {
    return `
        <div class="modal__overlay"></div>
        <div class="modal__inner">
          <div class="modal__header">
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
            <h3 class="modal__title"></h3>
          </div>
          <div class="modal__body"></div>
        </div>
    `;
  }

  setTitle(title) {
    this.elem.querySelector('.modal__title').textContent = title;
  }

  setBody(node) {
    this.elem.querySelector('.modal__body').innerHTML = '';
    this.elem.querySelector('.modal__body').append(node);
  }


  open() {
    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');
  }


  close() {
    document.body.classList.remove('is-modal-open');
    document.removeEventListener('keydown', this.#onKeyDown);
    this.elem.remove();
  }

  #onClick = () => {
    this.elem.querySelector('.modal__close').addEventListener('click', () => {
      this.close();
    }, {once: true});
  }


  #onKeyDown = (event) => {
    if (event.code === 'Escape') {
      event.preventDefault();
      this.close();
    }
  };

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('modal');
    this.elem.innerHTML = this.#template();

    // Возможно эти обработчики лучше вынести в метод опен
    this.#onClick();
    document.addEventListener('keydown', this.#onKeyDown);

    return this.elem;
  }

}
