const pair = function (arr, target) {
    let left_pointer = 0
    let right_pointer = arr.length - 1
    let ans = []

    while (left_pointer < right_pointer) {
        let left_value = arr[left_pointer]
        let right_value = arr[right_pointer]
        let tmp_sum = left_value + right_value
        if (tmp_sum === target) {
            ans = [left_pointer, right_pointer]
            break
        } else if (tmp_sum < target) {
            left_pointer++
        } else if (tmp_sum > target) {
            right_pointer--
        }
    }

    return ans
}

module.exports = pair