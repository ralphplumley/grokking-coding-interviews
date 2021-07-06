const triplet_sum_close_to_target = require('./solution2')

test('example 1: should return 1', ()=>{
    let arr = [-2, 0, 1, 2]
    expect(triplet_sum_close_to_target(arr, 2)).toEqual(1)
})

test('example 2: should return 0', ()=>{
    let arr = [-3, -1, 1, 2]
    expect(triplet_sum_close_to_target(arr, 1)).toEqual(0)
})

test('example 3: should return 0', ()=>{
    let arr = [1, 0, 1, 1]
    expect(triplet_sum_close_to_target(arr, 100)).toEqual(3)
})



