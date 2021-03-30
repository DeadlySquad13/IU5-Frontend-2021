/**
 * Напишите функцию polyfill map reduce,
 * написать полифил на функцию map через reduce
 * что такое полифил нужно почитать в гугле
 * Примеры:
 * [1,2,3].myMap((x) => x*2) -> [2,4,6]
 * Нужно назвать myMap !!!!!
 */

/**
 *
 * @param {Function} callbackfn - callback function that will be used on each element of an array.
 * @returns array modified by callbackfn.
 */
Array.prototype.myMap = function(callbackfn) {
    return this.reduce((acc, el) => {
        acc.push(callbackfn(el));
        return acc;
    },
    []
    );
}