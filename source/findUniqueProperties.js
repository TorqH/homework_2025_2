'use strict';
/**
 * Вариант 18
 * Напишите функцию findUniqueProperties, которая принимает два объекта и возвращает новый объект, 
 * содержащий только те свойства, которые уникальны для каждого из объектов.
 * Уникальные свойства — это те, которые присутствуют в одном объекте, но отсутствуют в другом.
 */

/**
 * Функция, которая принимает два объекта и возвращает новый объект, 
 * содержащий только те свойства, которые уникальны для каждого из объектов.
 * @param object1 - первый объект для сравнения
 * @param object2 - второй объект для сравнения
 * @example
 * findUniqueProperties({ x: 10, y: 20 }, { y: 20, z: 30 })
 * // returns 
 * { x: 10, z: 30 }
 * @returns {together}
 */
function findUniqueProperties(object1, object2) {
  const together = { ...object1, ...object2 };
  for (let key in together) {
    if (key in object1 && key in object2) {
      Reflect.deleteProperty(together, key);
    }
  }
  return together;
}

console.log(findUniqueProperties({ x: 'a', y: 'A' }, { h: 20, z: '20'}))