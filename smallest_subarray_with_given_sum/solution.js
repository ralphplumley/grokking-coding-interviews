const smallest_subarray_with_given_sum = function (s, arr) {
    let minLength = Infinity, windowSum = 0, windowStart = 0

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd] // add the next element

        // shrink the window as small as possible until the 'window_sum' is smaller than 's'
        while (windowSum >= s) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1)
            windowSum -= arr[windowStart]
            windowStart += 1
        }
    }

    if (minLength === Infinity) {
        return 0
    }

    return minLength
}

module.exports = smallest_subarray_with_given_sum