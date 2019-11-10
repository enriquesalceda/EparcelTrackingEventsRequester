const handler = require('../handler');

test('correct hello world', () => {
    expect(handler.helloWorld()).toBe("Hello World");
});

test('add 1 + 2 should be 3', () => {
    expect(handler.add(1, 2)).toBe(3);    
})