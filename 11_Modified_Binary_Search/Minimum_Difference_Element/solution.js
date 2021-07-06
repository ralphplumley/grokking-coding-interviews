const search_min_diff_element = function(arr, key) {
    let result = Infinity
    let start = 0
    let end = arr.length - 1

    while (start <= end) {
        let middle = Math.floor(start + (end - start) / 2)
        let number = arr[middle]
        if (number > key) {
            if ( result === Infinity || Math.abs(key - number) < Math.abs(result - key) ) {
                result = number
            }
            end = middle - 1
        } else if (number < key) {
            if ( result === Infinity || Math.abs(key - number) < Math.abs(result - key) ) {
                result = number
            }
            start = middle + 1
        } else {
            return number
        }
    }

    return result
};

/*
Input: arr of ints, target key
Output: return an element (int) that is the closest in value to the target key
Constraints:
Edge cases:

Naive solution - iterate one at a time, starting from 0, check each element against target, store min diff along the way
Binary Search would be more efficient

// instantiate variable result
// set start, end
// while start less than or equal to end
    // set middle
    // if number is greater than key
        // if the difference is less than current difference
            // set result as current element
        // go down
    // if number is less than key
        // if the difference is less than current difference
            // set result as current element
        // go up
    // else
        // found exact
        // return element, as we won't find one any closer

// return result

 */

console.log(search_min_diff_element([4, 6, 10], 7))
console.log(search_min_diff_element([4, 6, 10], 4))
console.log(search_min_diff_element([1, 3, 8, 10, 15], 12))
console.log(search_min_diff_element([4, 6, 10], 17))
