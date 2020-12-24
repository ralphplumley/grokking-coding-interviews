const remove_duplicates = require('./solution')

test('test #1', () => {
    let arr = [2, 3, 3, 3, 6, 9, 9]
    expect(remove_duplicates(arr)).toEqual(4)
})