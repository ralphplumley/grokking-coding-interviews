const search_rotated_array = function(arr, key) {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2)

        if (arr[mid] === key) return mid
        if (arr[start] <= arr[mid]) {
            // left side is sorted in order
            if (key >= arr[start] && key < arr[mid]) {
                end = mid - 1
            } else {
                // key is > arr[mid]
                start = mid + 1
            }
        } else {
            // right side is sorted in ascending order
            if (key > arr[mid] && key <= arr[end]) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
    }

    // didn't find the element
    return -1;
}


// console.log(search_rotated_array([10, 15, 1, 3, 8], 15))
// console.log(search_rotated_array([4, 5, 7, 9, 10, -1, 2], 10))
// console.log(search_rotated_array([4,5,6,7,0,1,2], 4))
// console.log(search_rotated_array([4,5,6,7,0,1,2], 0)) // 4
// console.log(search_rotated_array([4,5,6,7,0,1,2], 3)) // -1
// console.log(search_rotated_array([1], 0)) // -1
console.log(search_rotated_array([3,1], 1)) // 1
