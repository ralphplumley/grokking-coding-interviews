const triplet_with_smaller_sum = function(arr, target) {
    let count = 0
    // sort
    arr.sort((a,b) => a-b)

    for (let x = 0; x < arr.length - 2; x++) {
        let y = x + 1
        let z = arr.length - 1
        while (y < z) {
            if (arr[y] + arr[z] < target - arr[x]) {
                count += z - y
                y += 1
            } else {
                z -= 1
            }
        }
    }

    return count
}

console.log(triplet_with_smaller_sum([-1,4,2,1,3], 5))