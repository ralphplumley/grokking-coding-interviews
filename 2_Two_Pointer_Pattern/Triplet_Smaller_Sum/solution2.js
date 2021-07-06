const triplet_with_smaller_sum = function(arr, target) {
    let triplets = []
    // sort
    arr.sort((a,b) => a-b)

    for (let x = 0; x < arr.length - 2; x++) {
        if (arr[x] > target) break
        for (let y = x + 1; y < arr.length - 1; y++) {
            if (arr[x] + arr[y] > target) break
            for (let z = y + 1; z < arr.length; z++) {
                let sum = arr[x] + arr[y] + arr[z]
                if (sum < target) {
                    let tmpArr = [arr[x], arr[y], arr[z]]
                    triplets.push(tmpArr)
                }

                if (sum > target) {
                    break
                }
            }
        }
    }

    return triplets.length
};

console.log(triplet_with_smaller_sum([-1,4,2,1,3], 5))