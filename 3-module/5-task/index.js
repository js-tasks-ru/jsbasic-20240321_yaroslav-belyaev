function getMinMax(str) {
  // ваш код...
  const sorted = str.split(' ').filter((item) => isFinite(item)).sort((a, b) => a - b);

  return {
    min: Number(sorted.shift()),
    max: Number(sorted.pop()),
  };
}
