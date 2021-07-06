function search_ceiling_of_a_number(arr, key) {
    let len = arr.length
    if (key > arr[len - 1]) return -1

    let start = 0
    let end = len - 1

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2)
        let num = arr[mid]
        if (key < num) {
            end = mid - 1
        } else if (key > num) {
            start = mid + 1
        } else { // found the key
            return mid
        }
    }

    // if the key is a negative, that means the 0th element is the answer
    // and having gone through the while loop with a negative key, start will still be 0
    return start
}


console.log(search_ceiling_of_a_number([4, 6, 10], 6));             // 1
console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12));     // 4
console.log(search_ceiling_of_a_number([4, 6, 10], 17));            // -1
console.log(search_ceiling_of_a_number([4, 6, 10], -1));            // 0