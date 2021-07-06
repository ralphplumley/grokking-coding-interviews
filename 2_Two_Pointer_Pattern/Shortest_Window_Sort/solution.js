const shortest_window_sort = function(arr) {
    let i = 0, j = arr.length - 1

    while (i < arr.length && arr[i] < arr[i+1]) {
        i++
    }

    while (j > 0 && arr[j-1] < arr[j]) {
        j--
    }

    // Extend i from beginning to include any number which is bigger than the minimum of the subarray.
    // Extend j from end to include any number which is smaller than the maximum of the subarray.
    let min = arr[i], max = arr[j]
    for (let k = i; k < j + 1; k++) {
        if (arr[k] < min) min = arr[k]
        if (arr[k] > max) max = arr[k]
    }

    while (arr[i-1] > min) {
        i--
    }

    while(arr[j+1] < max) {
        j++
    }

    if (i === arr.length - 1) return 0
    if (j === 0) return arr.length

    return (j-i+1)
}

module.exports = shortest_window_sort