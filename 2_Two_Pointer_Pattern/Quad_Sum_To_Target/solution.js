const search_quadruplets = function(arr, target) {
    // sort
    arr.sort((a,b) => a-b)
    let quadruplets = [];
    for (let i = 0; i < arr.length - 3; i++) {
        // Skip duplicates
        if ( (i>0) && (arr[i] === arr[i-1])) {
            continue
        }
        for (let j = i + 1; j < arr.length - 2; j++) {
            if ( j>0 && arr[j] === arr[j-1]) {
                continue
            }
            search_pairs(arr, target, i, j, quadruplets)
        }
    }
    return quadruplets;
}

function search_pairs(arr, target_sum, first, second, quadruplets) {
    let left =  second + 1,
        right = arr.length - 1

    while (left < right) {
        let sum = arr[first] + arr[second] + arr[left] + arr[right]
        if (sum === target_sum) { // found a match
            quadruplets.push([arr[first], arr[second], arr[left], arr[right]])
            left += 1
            right -= 1

            // skip duplicates ...
            while ( (left < right ) && (arr[left] === arr[left - 1]) ) {
                left += 1
            }
            while ( (left < right ) && (arr[right] === arr[right + 1]) ) {
                right -= 1
            }
        } else if (sum < target_sum) {
           left += 1
        } else {
            right -= 1
        }
    }

}

console.log(search_quadruplets([4, 1, 2, -1, 1, -3], target=1))