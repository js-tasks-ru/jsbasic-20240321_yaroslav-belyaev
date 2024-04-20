/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  elem = null;
  #list = [];

  constructor(rows) {
    this.#list = rows;

    this.elem = this.#render();
  }

  #template() {
    return `
    <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${this.#list.map((value) => `<tr>${this.#templateCell(value)}</tr>`)}
      </tbody>
    `;
  }

  #templateCell(obj) {
    let values = Object.values(obj);
    values.push(`<td><button class="btn-delete">X</button></td>`);
    return values.map(value => `<td>${value}</td>`);
  }

  #onClickRemove = (e) => {
    e.target.closest('tr').remove();
  }

  #render() {
    this.elem = document.createElement('table');
    this.elem.innerHTML = this.#template();

    this.elem.addEventListener('click', this.#onClickRemove);

    return this.elem;
  }
}
