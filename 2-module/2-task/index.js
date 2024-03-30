function isEmpty(obj) {
  // ваш код...
  for (const key in obj) {
    return false;
  }

  return true;
}
