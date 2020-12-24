const smallest_subarray_with_given_sum = require('./solution')

test('7, [2,1,5,2,3,2] to be 2', () => {
    expect(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])).toEqual(2)
})