/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  // ваш код...
  if (!name || name.includes(' ') || name.length < 4) {
    return false;
  }
  return true;

  /*
    return (!name || name.length < 4 || name.indexOf(' ') !== -1) ? false : true
    Влад, какой способ в данном случае лучше?
    И как можно улучшить вообще?
   */
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
