const search_bitonic_array = function(arr, key) {
    // first, find the index of the max element
    const maxIndex = find_max(arr)

    // break array into two sub arrays
    // this one is from 0 to maxIndex, sorted in Ascending order
    const keyIndex = binary_search(arr, key, 0, maxIndex)
    if (keyIndex !== -1) {
        return keyIndex
    }
    // if we didn't find keyIndex in the lower half above,
    // run binarySearch on the second half array, as the key is in that half then
    return binary_search(arr, key, maxIndex + 1, arr.length - 1)
};

// order agnostic binary search
function binary_search(arr, key, start, end) {
    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2)

        if (key === arr[mid]) {
            return mid
        }

        if (arr[start] < arr[end]) { // ascending order
            if (key < arr[mid]) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        } else { // descending order
            if (key > arr[mid]) {
                end = mid -1
            } else {
                start = mid + 1
            }
        }
    }
    return -1
}

function find_max(arr) {
    let start = 0,
        end = arr.length - 1

    while (start < end) {
        const mid = Math.floor(start + (end - start) / 2)
        if (arr[mid] > arr[mid + 1]) {
            end = mid
        } else {
            start = mid + 1
        }
    }
    return start
}


console.log(search_bitonic_array([1, 3, 8, 4, 3], 4))
console.log(search_bitonic_array([3, 8, 3, 1], 8))
console.log(search_bitonic_array([1, 3, 8, 12], 12))
console.log(search_bitonic_array([10, 9, 8], 10))