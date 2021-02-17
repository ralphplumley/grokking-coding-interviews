const find_range = function(arr, key) {
    result = [- 1, -1];
    result[0] = binary_search(arr, key, false)

    // if start is still -1, that means we didn't find the key at all
    // so no point in looking for the end range
    if (result[0] !== -1) {
        result[1] = binary_search(arr, key, true)
    }

    return result;
};

function binary_search (arr, key, findMidIndex) {
    let keyIndex = -1
    let start = 0
    let end = arr.length - 1

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2)
        if (key < arr[mid]) {
            start = mid + 1
        } else if (key > arr[mid]) {
            start = mid + 1
        } else { // key === arr[mid]
            keyIndex = mid
            if (findMidIndex) {
                start = mid + 1 // search ahead to find the last index of 'key'
            } else {
                end = mid - 1 // search behind to find the first index of 'key'
            }
        }
    }

    return keyIndex
}

console.log(find_range([4, 6, 6, 6, 9], 6))
console.log(find_range([1, 3, 8, 10, 15], 10))
console.log(find_range([1, 3, 8, 10, 15], 12))
