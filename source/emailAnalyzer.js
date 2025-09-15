'use strict';

/**
 * Функция, которая принимает строку и возвращает объект с анализом электронных адресов, содержащихся в этой строке. 
 * Объект содержит следующие свойства:
 * 1. emailCount: количество электронных адресов в строке.
 * 2. uniqueEmails: массив уникальных электронных адресов, найденных в строке.
 * 3. mostFrequentEmail: электронный адрес, который встречается чаще всего (если несколько адресов имеют одинаковую частоту, вернуть любой из них).
 * @param email_bank - список слов в строке полученной на входе
 * @param eemailRegex - шаблон, под который попадут только корректные имейлы
 * @param validEmails - список валидных имейлов
 * @param uniqueEmails - список уникальных имейлов
 * @param mostFrequentEmail - строка, самый часто встречающийся имейл
 * 
 * @example
 * emailAnalyzer("Мой email: user@example.com.");
 * // returns emailCount: 1,
            uniqueEmails: ["user@example.com"],
            mostFrequentEmail: "user@example.com"
 * 
 * @returns {info}
 */

function emailAnalyzer(emails) {
    const email_bank = (emails.replace(/\.$/, '')).split(/[;,\s]+/); // распарсить строку которую нам передали на ввод, чтобы получить список слов
    const emailRegex = /[^\s@,\.;\\]+@[^\s@,\.;\\]+\.[^\s@,\.;\\]+$/; // описываем шаблон, под который попадут только корректные имейлы
    const validEmails = []    // создаем пустой список, в который потом положим все имейлы прошедшие проверку на валидность формата

    for (let mail of email_bank) {  // проходимся по всем элементам списка и смотрим, что из этого является валидными имейлами
        let isValid = emailRegex.test(mail);
        if (isValid) {
        validEmails.push(mail);
        }
    }

    const uniqueEmails = [...new Set(validEmails.map(item => item.toLowerCase()))]; // делаем сет из списка чтобы получить только уникальные значения

    let mostFrequentEmail = ""
    if (validEmails.length > 0) {
        const frequency = validEmails.reduce((acc, item) => {   // делаем список чисел которые обозначают количество появлений каждого..
            acc[item] = (acc[item] || 0) + 1;                  // ..отдельного значения в списке
            return acc;
        }, {});
        mostFrequentEmail = Object.keys(frequency).reduce((a, b) =>  // сравниваем друг с другом значения из предыдущего списка чтобы найти самый частый элемент
        frequency[a] > frequency[b] ? a : b);
    }

    const info = {
        emailCount: validEmails.length,
        uniqueEmails: uniqueEmails,
        mostFrequentEmail: mostFrequentEmail
    }

    return info;
}
'use strict';

/**
 * Функция, которая принимает строку и возвращает объект с анализом электронных адресов, содержащихся в этой строке. 
 * Объект содержит следующие свойства:
 * 1. emailCount: количество электронных адресов в строке.
 * 2. uniqueEmails: массив уникальных электронных адресов, найденных в строке.
 * 3. mostFrequentEmail: электронный адрес, который встречается чаще всего (если несколько адресов имеют одинаковую частоту, вернуть любой из них).
 * @param emails - строка, содержащая имейлы
 * @const email_bank - список слов в строке полученной на входе
 * @const eemailRegex - шаблон, под который попадут только корректные имейлы
 * @const validEmails - список валидных имейлов
 * @const uniqueEmails - список уникальных имейлов
 * @const mostFrequentEmail - строка, самый часто встречающийся имейл
 * 
 * @example
 * emailAnalyzer("Мой email: user@example.com.");
 * // returns emailCount: 1,
            uniqueEmails: ["user@example.com"],
            mostFrequentEmail: "user@example.com"
 * 
 * @returns {info}
 */
function emailAnalyzer(emails) {
    if (typeof emails !== 'string') {
        let emailCount = 0;
        let wronUniqueEmails = [];
        let wronMostFrequentEmail = "";
        return emailCount, wronUniqueEmails, wronMostFrequentEmail;
  }

    const email_bank = emails.replace(/\.$/, '').split(/[;,\s]+/); // распарсить строку которую нам передали на ввод, чтобы получить список слов
    const emailRegex = /[\w\-_]+@[\w\-_]+(\.[\w\-_]+)+$/; // описываем шаблон, под который попадут только корректные имейлы
    const validEmails = []; // создаем пустой список, в который потом положим все имейлы прошедшие проверку на валидность формата
    let mostFrequentEmail = '';
    for (let mail of email_bank) {    // проходимся по всем элементам списка и смотрим, что из этого является валидными имейлами
        let isValid = emailRegex.test(mail);
        if (isValid) {
            validEmails.push(mail);
            const frequency = validEmails.reduce((acc, item) => { // делаем список чисел которые обозначают количество появлений каждого..
                acc[item] = (acc[item] || 0) + 1;                // ..отдельного значения в списке
                return acc;
                }, {});
            mostFrequentEmail = Object.keys(frequency).reduce(
            (a,b ) => (frequency[a] > frequency[b] ? a : b) // сравниваем друг с другом значения из предыдущего списка чтобы найти самый частый элемент
            );
        }
    }

    const uniqueEmails = [
    ...new Set(validEmails.map(item => item.toLowerCase())),
    ]; // делаем сет из списка чтобы получить только уникальные значения

    const info = {
    emailCount: validEmails.length,
    uniqueEmails: uniqueEmails,
    mostFrequentEmail: mostFrequentEmail,
    };

    return info;
}
