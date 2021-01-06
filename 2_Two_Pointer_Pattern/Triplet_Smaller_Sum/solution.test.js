const triplet_with_smaller_sum = require('./solution')

test('should return 4', ()=>{
    let arr = [-1,4,2,1,3]
    expect(triplet_with_smaller_sum(arr, 5)).toEqual((4))
})
