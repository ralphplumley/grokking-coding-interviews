const binary_search = function(arr, key) {
    let start = 0
    let end = arr.length - 1
    let mid = Math.floor((end - start) / 2)
    let isAscending = arr[start] < arr[end]

    while (start <= end) {
        // calculate the middle of the current range
        mid = Math.floor(start + (end - start) / 2)

        let num = arr[mid]
        if (num === key) return mid
        if (num < key) {
            if (isAscending) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        } else {
            if (isAscending) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
    }

    return -1;
};

console.log(binary_search([4, 6, 10], 10)) // 2
console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5)) // 4
console.log(binary_search([10, 6, 4], 10)) // 0
console.log(binary_search([10, 6, 4], 4)) // 2