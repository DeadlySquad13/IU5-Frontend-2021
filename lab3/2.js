/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
/**
 * @param {string} str
 * @reutrns minMax {object}
 */
function getMinMax(str) {
    const words = str.match(/\-?[0-9]*(\.?[0-9]+)?/g)
    .filter(el => el) // '' == null.
    .map(el => +el);
    return {min: Math.min(...words), max: Math.max(...words)};
}

module.exports = getMinMax;