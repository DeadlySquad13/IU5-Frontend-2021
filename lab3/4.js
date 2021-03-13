/**
 * Напишите функцию prettySum(arr),
 * на вход подается массив arr
 * необходимо вернуть сумму чисел, находящихся на четных индексах, умноженную на последний элемент
 * Примеры:
 * [3, 2, 6, 5, 4, 1, 2] ->  30
 * как считать: (3 + 6 + 4 + 2) * 2
 */
/**
 * @param {Array} arr
 * @returns {Number}
 */
function prettySum(arr) {
    return arr.reduce((acc, el, i) => acc + (i % 2 === 0 ? el : 0), 0) * arr.pop();
}

module.exports = prettySum;