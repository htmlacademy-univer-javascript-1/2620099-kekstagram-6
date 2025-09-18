/* eslint-disable no-console */

const checkLength = (str, len) => str.length<=len;

checkLength('проверяемая строка', 20);
checkLength('проверяемая строка', 18);
checkLength('проверяемая строка', 10);

const isPalindrom = (str) => {
  const cleanedStr = str.toLowerCase().replace(/\s/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
};

isPalindrom('топот');
isPalindrom('ДовОд');
isPalindrom('Кекс');
isPalindrom('Лёша на полке клопа нашёл ');


