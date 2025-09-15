'use strict';

QUnit.module("Тестируем функцию findUniqueProperties", function() {
    QUnit.test("Работает правильно для объектов с уникальными свойствами", function(assert) {
        const result = findUniqueProperties(
            { a: 1, b: 2, c: 3 },
            { b: 2, c: 4, d: 5 }
        );

        assert.deepEqual(result, { a: 1, d: 5 }, "Должны быть уникальные свойства из обоих объектов.");
    });

    QUnit.test("Работает правильно для объекты с отсутствующими свойствами", function(assert) {
        const result = findUniqueProperties(
            {},
            {}
        );

        assert.deepEqual(result, {}, "Должны быть уникальные свойства x и z.");
    });

    QUnit.test("Работает правильно для идентичных объектов", function(assert) {
        const result = findUniqueProperties(
            { a: 1, b: 2 },
            { a: 1, b: 2 }
        );

        assert.deepEqual(result, {}, "Идентичные объекты должны вернуть пустой объект.");
    });

    QUnit.test("Работает правильно если в объектах неодинаковое количество свойств", function(assert) {
        const result = findUniqueProperties(
            { x: 10, y: 20 },
            { y: 20, z: 30, po: 0, yu: 11}
        );

        assert.deepEqual(result, {x: 10, z: 30, po: 0, yu: 11});
    });

    QUnit.test("Работает правильно если в объектах свойства разных типов", function(assert) {
        const result = findUniqueProperties(
            { x: 'a', y: 'A' },
            { h: 20, z: '20'}
        );
        assert.deepEqual(result, {x: 'a', y: 'A', h: 20, z: '20'});
    });
});