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
    return str === str.split('').reverse().join('');
}

module.exports = isPalindrome;
