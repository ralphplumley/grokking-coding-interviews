const search_triplets = require('./solution')

test('', () => {
    let arr = [-3, 0, 1, 2, -1, 1, -2]
    let solution = [
        [ -3, 1, 2 ],
        [ -2, 0, 2 ],
        [ -2, 1, 1 ],
        [ -1, 0, 1 ]]
    expect(search_triplets(arr)).toEqual(solution)
})

test('', () => {
    let arr = [-5, 2, -1, -2, 3]
    let solution = [
        [ -5, 2, 3 ],
        [ -2, -1, 3 ]]
    expect(search_triplets(arr)).toEqual(solution)
})





