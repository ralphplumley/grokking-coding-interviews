const triplet = require('./solution')

test('should return -1 with input length of 2 or less', ()=>{
    let arr = []
    expect(triplet(arr)).toEqual(-1)
})

test('example 1: should return 1', ()=>{
    let arr = [-2, 0, 1, 2]
    expect(triplet(arr, 2)).toEqual(1)
})

test('example 2: should return 0', ()=>{
    let arr = [-3, -1, 1, 2]
    expect(triplet(arr, 1)).toEqual(0)
})

test('example 3: should return 0', ()=>{
    let arr = [1, 0, 1, 1]
    expect(triplet(arr, 100)).toEqual(3)
})



