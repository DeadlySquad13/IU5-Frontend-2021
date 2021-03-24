/**
 * Напишите функцию curry(f),
 * входные данные - функция
 * выходные данные - функция, или результат если количество аргументов достаточно
 * Примеры:
 *
 * function add(a, b, c) {
 *  return a + b + c;
 * }
 *
 * console.log(curry(add)(1)(2)(3)); //6
 * console.log(curry(add)(1)(2, 3)); //6
 * console.log(curry(add)(1, 2, 3)); //6
 */
/**
 *
 * @param {Function} f
 * @returns
 */
// function curry(f) {
//     return function(a) {
//         return function(b) {
//             return function(c) {
//                 return f(a, b, c);
//             }
//         }
//     };
// }

/**
 *
 * @param {Function} f
 * @returns executed curried function.
 */
function curry(f) {
    return curried = (...args) => {
        if (args.length === f.length) // All necessary parameters are passed.
            return f(...args)
        return curried.bind(this, ...args); // Recursively looping until we bind all needed parameters.
    }
}

module.exports = curry;