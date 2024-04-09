function getMinMax(str) {
  // ваш код...
  const filtered = str.split(' ').filter((item) => Number(item));

  return {
    min: Math.min(...filtered),
    max: Math.max(...filtered),
  };
}
