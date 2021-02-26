const search_next_letter = function(letters, key) {
    let start = 0
    let end = letters.length - 1
    if (key > letters[end]) return letters[0]

    let smallest = 'z'
    while (start <= end) {
        let middle = Math.floor(start + (end - start) / 2)
        let char = letters[middle]
        if (char > key && char < smallest) smallest = char

        if (key < char) {
            // go down
            end = middle - 1
        } else if (key > char) {
            // go up
            start = middle + 1
        } else {
            // key === char
            // we're at the end, we need to return the first character
            if (middle === letters.length - 1) return letters[0]

            return letters[middle + 1]
        }
    }
    return smallest
};


// console.log(search_next_letter(['a', 'c', 'f', 'h'], 'f')) // 'h'
console.log(search_next_letter(['a', 'c', 'f', 'h'], 'b')) // 'c'
console.log(search_next_letter(['a', 'c', 'f', 'h'], 'm')) // 'a'