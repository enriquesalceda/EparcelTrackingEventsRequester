const handler = require('../handler');
const helper = require('../logic/helperFunctions');

test('correct hello world', () => {
    expect(handler.helloWorld()).toBe("Hello World");
});

test('add 1 + 2 should be 3', () => {
    expect(handler.add(1, 2)).toBe(3);
})

test('say hello', () => {
    expect(helper.sayHello('Rocco')).toBe('Hello Rocco');
})
