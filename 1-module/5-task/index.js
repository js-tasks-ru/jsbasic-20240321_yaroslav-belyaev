function truncate(str, maxlength) {
  // ваш код...
  let result = '';

  if (str.length < maxlength) {
    return str;
  }

  return result = str.slice(0, maxlength - 1) + '…';
}
