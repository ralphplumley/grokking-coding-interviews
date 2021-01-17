const shortest_window_sort = require('./solution')

test('#1', ()=> {
    let arr = [1,2,3]
    expect(shortest_window_sort(arr)).toEqual(0)
})

test('#2', ()=> {
    let arr = [3,2,1]
    expect(shortest_window_sort(arr)).toEqual(3)
})

test('#3', ()=> {
    let arr = [1,2,5,3,7,10,9,12]
    expect(shortest_window_sort(arr)).toEqual(5)
})

test('#4', ()=> {
    let arr = [1,3,2,0,-1, 7, 10]
    expect(shortest_window_sort(arr)).toEqual(5)
})