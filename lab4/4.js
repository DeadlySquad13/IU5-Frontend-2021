/**
 * Напишите функцию get1DArray(arr),
 * на вход подается массив бесконечной вложенности массивов arr
 * необходимо вернуть одномерный массив
 * Примеры:
 * [1, 2, 'aa', [1, 2, 3],
    [
        [1, 2],
        [1, 2]
    ],
    [
        [
            [1, 2, [1, 2, [2]]], 3
        ], 4
    ]
]; ---> [1, 2, "aa", 1, 2, 3, 1, 2, 1, 2, 1, 2, 1, 2, 2, 3, 4]
*/

/**
 *
 * @param {Array} arr
 * @returns {Array}
 */
function get1DArray(arr) {
    let result = [];

    function flatten(arr) {
        return arr.reduce((acc, el) => {
            Array.isArray(el) ? flatten(el) : acc.push(el)
            return acc;
        }, result)
    }

    flatten(arr);

    return result;
}

module.exports = get1DArray;
