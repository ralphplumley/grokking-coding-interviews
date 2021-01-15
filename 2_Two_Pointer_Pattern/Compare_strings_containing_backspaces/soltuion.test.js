const { backspace_compare, clean } = require('./solution')

test('#1', () => {
    let str1 = 'xy#z'
    let str2 = 'xzz#'
    let expectation = true
    expect(backspace_compare(str1, str2)).toEqual(expectation)
})

test('#2', () => {
    let str1 = 'xy#z'
    let str2 = 'xyz#'
    let expectation = false
    expect(backspace_compare(str1, str2)).toEqual(expectation)
})

test('#3', () => {
    let str1 = 'xp#'
    let str2 = 'xyz##'
    let expectation = true
    expect(backspace_compare(str1, str2)).toEqual(expectation)
})

test('#4', () => {
    let str1 = 'xywrrmp'
    let str2 = 'xywrrmu#p'
    let expectation = true
    expect(backspace_compare(str1, str2)).toEqual(expectation)
})

