/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

/**
 * Solved with the principle of a Stack.
 * @param {String} str
 * @returns {Boolean}
 */
function checkBrackets(str) {
    const possiblePairs = new Map([
        [']', '['],
        [')', '('],
        ['>', '<']
    ])
    const arr = [];
    return Boolean(!
        str.split('')
        .reduce((acc, el) => {
        (arr[arr.length - 1] === possiblePairs.get(el) && arr[arr.length - 1] != undefined) // Undefined === undefined...
        ? arr.pop()
        : arr.push(el); 
        return arr;
    },
    [])
    .length);
}

console.log(checkBrackets('[(]())<>'));

module.exports = checkBrackets;
