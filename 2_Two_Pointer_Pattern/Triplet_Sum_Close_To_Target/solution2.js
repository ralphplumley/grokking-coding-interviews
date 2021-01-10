const triplet_sum_close_to_target = function(arr, target_sum) {
    let diff = Infinity
    let sum = Infinity

    // sort
    arr.sort((a,b) => a-b)
    for (let x = 0; x < arr.length - 2; x++) {
        let y = x + 1
        let z = arr.length - 1
        while (y<z) {
            let curr_sum = arr[x] + arr[y] + arr[z]
            let curr_diff = target_sum - curr_sum
            if (Math.abs(curr_diff) < diff ) {
                diff = curr_diff
                sum = curr_sum
            }

            if (curr_sum < target_sum) {
                y += 1
            } else {
                z -= 1
            }
        }
    }
    return sum
}

module.exports = triplet_sum_close_to_target

