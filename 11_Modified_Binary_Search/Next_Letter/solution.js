const search_next_letter = function(letters, key) {
    let n = letters.length
    if (getCharValue(key) > getCharValue(letters[n-1])) return letters[0]

    let start = 0
    let end = n - 1
    let nextLetter = letters[0]

    while (start <= end) {
        let middle = Math.floor(start + (end - start) / 2)
        let keyValue = getCharValue(key)
        let letterValue = getCharValue(letters[middle])

        if (keyValue < letterValue) {
            nextLetter = letters[middle]
            end = middle - 1
        } else if (keyValue >= letterValue) {
            start = middle + 1
        }
    }

    return nextLetter
};

const getCharValue = function(char) {
    let key = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8,
        'i': 9,
        'j': 10,
        'k': 11,
        'l': 12,
        'm': 13,
        'n': 14,
        'o': 15,
        'p': 16,
        'q': 17,
        'r': 18,
        's': 19,
        't': 20,
        'u': 21,
        'v': 22,
        'w': 23,
        'x': 24,
        'y': 25,
        'z': 26
    }

    return key[char]
}


console.log(search_next_letter(['a', 'c', 'f', 'h'], 'f'))      // 'h'
console.log(search_next_letter(['a', 'c', 'f', 'h'], 'b'))      // 'c'
console.log(search_next_letter(['a', 'c', 'f', 'h'], 'm'))      // 'a'
