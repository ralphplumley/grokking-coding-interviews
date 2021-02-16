const search_next_letter = function(letters, key) {
    const n = letters.length
    if (key < letters[0] || key > letters[n-1]) return letters[0]

    let start = 0
    let end = n - 1
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2)
        if (key < letters[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    // at the end of the while loop, start === end + 1
    return letters[start % n]
};


console.log(search_next_letter(['a', 'c', 'f', 'h'], 'f'))
console.log(search_next_letter(['a', 'c', 'f', 'h'], 'b'))
console.log(search_next_letter(['a', 'c', 'f', 'h'], 'm'))
