const search_triplets = function (arr) {
    let triplets = []

    // sort the array - O(log n)
    arr.sort(function (a, b) {
        return a - b
    })

    // Start in the 2nd slot
    // [ ,x, , , ] 
    for (let anchor = 1; anchor < arr.length - 1; anchor++) {
        if (arr[anchor] === arr[anchor - 1]) continue
        let ptr_left = anchor - 1
        let ptr_right = anchor + 1

        while (!(ptr_left < 0) && !(ptr_right > arr.length - 1)) {
            let a = arr[ptr_left]
            let b = arr[anchor]
            let c = arr[ptr_right]
            let sum = a + b + c

            if (sum === 0) {
                triplets.push([a, b, c])
                while (arr[ptr_right] === c) {
                    ptr_right += 1
                }
            } else if (sum < 0) {
                ptr_right += 1
            } else if (sum > 0) {
                ptr_left -= 1
            }
        }
    }

    return triplets
}

module.exports = search_triplets