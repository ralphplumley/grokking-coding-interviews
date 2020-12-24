const make_squares = require('./solution')

test('test #1', () => {
    let arr = [-2, -1, 0, 2, 3]
    let want = [0, 1, 4, 4, 9]
    expect(make_squares(arr)).toEqual(want)
})