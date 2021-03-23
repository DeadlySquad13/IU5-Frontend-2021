/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

/**
 *
 * @param {String} str
 * @returns {String}
 */
function rle(str) {
    let char = str.split('')[0];
    let counter = 0;

    // Генерируем новый массив
    const result = str.split('').reduce((acc, el) => {
        if (el === char) {
            counter++;
        } else {
            acc.push(char);
            if (counter > 1) acc.push(counter);
            counter = 1;
            char = el;
        }
        return acc;
    },
    []
    )

    result.push(char);
    if (counter > 1) result.push(counter);
    return result.join('');
}

module.exports = rle;
