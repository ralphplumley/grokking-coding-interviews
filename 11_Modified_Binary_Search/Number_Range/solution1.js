const find_range = function(arr, key) {
    result = [- 1, -1];
    // loop through
        // if num is key
            // if we haven't stored start yet
                // store start

            // if this is the last num of arr
                // store end
            // else if the next element is not num
                // store end
                // break
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        if (num === key) {
            if (result[0] === -1) {
                result[0] = i
            }

            if (i === arr.length - 1) {
                result[1] = i
            } else if (arr[i] !== arr[i+1]) {
                result[1] = i
                break
            }
        }
    }

    return result;
};


console.log(find_range([4, 6, 6, 6, 9], 6))
console.log(find_range([1, 3, 8, 10, 15], 10))
console.log(find_range([1, 3, 8, 10, 15], 12))