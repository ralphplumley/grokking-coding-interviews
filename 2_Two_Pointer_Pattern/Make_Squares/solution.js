const make_squares = function (arr) {
    const n = arr.length
    let squares = Array(n).fill(0)
    let highestSquareIndex = n - 1
    let ptr_left = 0
    let ptr_right = arr.length - 1

    while (ptr_left < ptr_right) {
        let square_left = arr[ptr_left] * arr[ptr_left]
        let square_right = arr[ptr_right] * arr[ptr_right]

        if (square_left > square_right) {
            squares[highestSquareIndex] = square_left
            ptr_left++
        } else {
            squares[highestSquareIndex] = square_right
            ptr_right--
        }
        highestSquareIndex--
    }

    return squares
}

/*
    Time: O(n) as we have to hit each element once
    Space: O(n) as we have to fill another array with the same amount of elements
*/

module.exports = make_squares