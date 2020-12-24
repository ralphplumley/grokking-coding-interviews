const pair = require('./solution')

test('test #1', () => {
    const arr = [1, 2, 3, 4, 6]
    const target = 6
    expect(pair(arr, target)).toEqual([1, 3])
})

test('test #2', () => {
    const arr = [1, 3, 4, 5, 9]
    const target = 9
    expect(pair(arr, target)).toEqual([2, 3])
})