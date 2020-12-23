const { test, expect } = require('@jest/globals')
const fruits_into_baskets = require('./solution')

test('test #1', () => {
    const arr = ['A', 'B', 'C', 'A', 'C']
    expect(fruits_into_baskets(arr)).toEqual(3)
})

test('test #2', () => {
    const arr = ['A', 'B', 'C', 'B', 'B', 'C']
    expect(fruits_into_baskets(arr)).toEqual(5)
})

test('test #3', () => {
    const arr = []
    expect(fruits_into_baskets(arr)).toEqual(0)
})

test('test #4', () => {
    const arr = ['A', 'B', 'C', 'B', 'B', 'C', 'A', 'B']
    expect(fruits_into_baskets(arr)).toEqual(5)
})
