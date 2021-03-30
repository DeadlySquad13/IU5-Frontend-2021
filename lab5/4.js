/**
 * починить функцию memoize(func),
 * на вход принимает функцию
 * на выходе получаем функцию, которая умеет запоминать последний результат вызова
 * примеры:
 * const add = (a) => a * 2;
 * const memozedAdd = memoize(add)
 * memozedAdd(1) -> {cache: false, result: 2}
 * memozedAdd(1) -> {cache: true, result: 2}
 * memozedAdd(2) -> {cache: false, result: 4}
 * memozedAdd(1) -> {cache: false, result: 2}
 * memozedAdd(2) -> {cache: false, result: 4}
 * memozedAdd(2) -> {cache: true, result: 4}
 */

/**
 *
 * @param {Function} func --- function to memorize.
 * @return {Function} that can memorize last result.
 */
function memoize(func) {
    const cache = {
        input: null,
        result: null
    }

    function memorizedFunc (arg) {
        if (arg == this.input) {
            return {
                cache: true,
                result: this.result
            };
        }

        const resultValue = func(arg);
        this.input = arg;
        this.result = resultValue;
        return {
            cache: false,
            result: func(arg)
        };
    }
    return memorizedFunc.bind(cache);
}

const add = a => a * 2;

const memozedAdd = memoize(add);

console.log(memozedAdd(1, 2));
console.log(memozedAdd(1, 2));
console.log(memozedAdd(2));
console.log(memozedAdd(1));
console.log(memozedAdd(2));
console.log(memozedAdd(2));

module.exports = memoize;