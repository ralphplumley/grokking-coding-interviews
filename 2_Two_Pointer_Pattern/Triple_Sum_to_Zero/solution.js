const search_triplets = function(arr) {
    // sort
    arr.sort((a,b) => a-b)

    let triplets = [];
    for (let x = 0; x < arr.length; x++) {
        let y = x + 1, z = arr.length - 1
        while (y < z) {
            let target_sum = 0 - arr[x]
            let yz_sum = arr[y] + arr[z]

            if (yz_sum === target_sum) { // found a triple
                let triple = [arr[x], arr[y], arr[z]]
                triplets.push(triple)
                y += 1
                z -= 1
            } else if (yz_sum > target_sum) {
                z -= 1
            } else {
                y += 1
            }
        }
    }
    return triplets;
}
module.exports = search_triplets