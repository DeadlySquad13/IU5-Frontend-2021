/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
/**
 *
 * @param {Array} arr
 * @returns {Array}
 */
function getAnagramms(arr) {
    const unify = str => str.toUpperCase().split('').sort().join('');
    const convertedArr = arr.map(str => unify(str));

    return convertedArr.reduce((acc, el) => {
        if (!acc.flat().map(str => unify(str)).includes(unify(el)))
        acc.push(arr.filter(word => unify(word) === el));
        return acc;
    }, []);
}

module.exports = getAnagramms;
