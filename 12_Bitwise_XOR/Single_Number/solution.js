function find_single_number(arr) {
    let xor = arr[0]

    for (let i = 1; i < arr.length; i++) {
        xor = xor ^ arr[i]
    }

    return xor
}

console.log(find_single_number([1, 4, 2, 1, 3, 2, 3]))