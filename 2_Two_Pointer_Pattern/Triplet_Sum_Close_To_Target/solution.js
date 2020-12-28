const triplet = function(arr, target_sum) {
    if (arr.length < 3) return -1

    let min = Infinity

    for(let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] === arr[i-1]) continue
        let left = i + 1
        let right = arr.length - 1

        while(left < right) {
            let x = arr[i]
            let y = arr[left]
            let z = arr[right]

            let temp_sum = x+y+z
            let diff = Math.abs(target_sum - temp_sum)

            if (temp_sum < target_sum) {
                if (diff < Math.abs(target_sum - min)) {
                    min = temp_sum
                }
            }

            if (temp_sum > target_sum) {
                right -= 1
            } else {
                left += 1
            }
        }
    }

    return min
}

module.exports = triplet
