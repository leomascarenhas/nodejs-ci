const { add, divide } = require("../src/math")

test('Test add function ZayQw', () => {
    expect(
        add(1, 2)).toBe(3)
})

test('Test divide operation', () => {
    expect(divide(10, 2)).toBe(6)
})