const max_sub_array_of_size_k = function (k, arr) {
    let max = -1
    let windowSum = 0, windowStart = 0

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]

        // slide the window
        if (windowEnd >= k - 1) {
            if (windowSum > max) max = windowSum
            windowSum -= arr[windowStart]
            windowStart += 1
        }
    }

    return max
}

const result1 = max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])
const result2 = max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])