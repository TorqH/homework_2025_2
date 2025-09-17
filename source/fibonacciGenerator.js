'use strict';
/**
 * Вариант 16 
 * Напишите функцию fibonacciGenerator, которая принимает одно число n и возвращает генератор, 
 * генерирующий первые n чисел последовательности Фибоначчи. 
 * Если n меньше или равно 0, генератор не должен генерировать никаких значений.
 */

/**
 * Функция, которая принимает одно число n и возвращает генератор, генерирующий первые n чисел последовательности Фибоначчи. 
 * @param number - число, обозначающее сколько первых чисел последовательности Фибоначчи нужно вывести
 * @example
 * const generator = fibonacciGenerator();
 * const resultArray = Array.from(generator);
 * // returns 
 * (5) [1, 1, 2, 3, 5]
 * @returns {fibonacciGenerator}
 */
function* fibonacciGenerator(number) {
  let first_number = 0;
  let second_number = 1;
  if (number <= 0 || typeof number !== 'number') {
    return []
  } else if (number === 1) {
    yield 0
    return
  } else if (number > 1) {
    yield 0
    yield 1
  } 
  for (let current_number = 1; current_number < (number-1); current_number++) {
    let fibonacci_number = first_number + second_number;
    first_number = second_number;
    second_number = fibonacci_number;
    yield fibonacci_number;
  }
}
const gen = fibonacciGenerator(1);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());