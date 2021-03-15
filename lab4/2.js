/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
/**
 *
 * @param {String} str
 * @return {Boolean}
 */
function isPalindrome(str) {
    const firstHalf = str.split('').splice(0, Math.floor(str.length / 2));
    const secondHalf = str.split('').splice(Math.ceil(str.length / 2));
    return firstHalf.join('') == secondHalf.reverse().join('');
}

module.exports = isPalindrome;
