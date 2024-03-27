function checkSpam(str) {
  // ваш код...
  let normalizeStr = str.toLowerCase();

  return normalizeStr.includes("1xbet") || normalizeStr.includes("xxx");

  /*
    if (str.toLowerCase().indexOf("1xBet") !== -1 || str.toLowerCase().indexOf("XXX") !== -1) {
    return true
    }
    return false

     if (str.toLowerCase().includes("1xbet") ||str.toLowerCase().includes("xxx")) {
        return true
    }
    return false

    Какой варинт лучше?
   */
}
