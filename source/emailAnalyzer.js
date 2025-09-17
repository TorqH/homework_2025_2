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
        let wrongInfo = {
            emailCount: 0,
            UniqueEmails: [],
            MostFrequentEmail: ""
        }
        return wrongInfo;
    }
    
    const email_bank = emails.replace(/\.$/, '').split(/[;,\s]+/); // распарсить строку которую нам передали на ввод, чтобы получить список слов
    const emailRegex = /[\w\-_]+@[\w\-_]+(\.[\w\-_]+)+$/; // описываем шаблон, под который попадут только корректные имейлы
    const validEmails = []; // создаем пустой список, в который потом положим все имейлы прошедшие проверку на валидность формата
    let mostFrequentEmail = '';
    const frequency = {}
    for (let mail of email_bank) {    // проходимся по всем элементам списка и смотрим, что из этого является валидными имейлами
        let isValid = emailRegex.test(mail);
        if (isValid) {
            validEmails.push(mail);
            if (!(mail in frequency)){
                frequency[mail] = 1;
            } else {
                frequency[mail] += 1;
            }
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
console.log(emailAnalyzer(null));