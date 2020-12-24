const longest = require('./solution')

test('araaci, 2 to be 4', () => {
    expect(longest('araaci', 2)).toEqual(4)
})

test('aarraaci, 2 to be 6', () => {
    expect(longest('aarraaci', 2)).toEqual(6)
})

test('araaci, 1 to be 2', () => {
    expect(longest('araaci', 1)).toEqual(2)
})

test('cbbebi, 3 to be 5', () => {
    expect(longest('cbbebi', 3)).toEqual(5)
})
