const find_letter_case_string_permutations = function(str) {
    let permutations = []
    permutations.push(str)

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (Number.isInteger(parseInt(char))) continue
        let n = permutations.length
        for (let j = 0; j < n; j++) {
            let clone = permutations[j].slice(0)
            clone = upperCaseSingleCharacter(char, clone, i)
            permutations.push(clone)
        }
    }
    return permutations;
};

const upperCaseSingleCharacter = function(char, str, index) {
    let arr = str.split('')
    let upper = char.toUpperCase()
    arr[index] = upper
    return arr.join('')
}

// console.log(`String permutations are: ${find_letter_case_string_permutations("ad52")}`)
console.log(`String permutations are: ${find_letter_case_string_permutations("ab7c")}`)
