/**
 * Напишите функцию customBind(f, context),
 * входные данные - функция и контекст
 * выходные данные - функция с прибинженым контекстом
 * Примеры:
 * customBind(function() {this.a + this.b}, {a: 1, b: 2})(); -> 3
 */

/**
 *
 * @param {Function} f
 * @param {Object} context
 */
function customBind(f, context) {
    return (...args) => f.call(context, ...args);
}

console.log(
    customBind(
    function() {
        return this.a + this.b;
    },
    {
       a: 1,
       b: 2
    }
    )()
);

module.exports = customBind;