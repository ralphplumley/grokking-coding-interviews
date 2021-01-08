const dutch_flag_sort = function(arr) {
    let low = 0,
        high = arr.length - 1,
        i = 0
    while (i <= high) {
        let num = arr[i]
        if (num === 0) {
            [arr[i], arr[low]] = [arr[low], arr[i]]
            low += 1
            i += 1
        } else if (num === 1) {
            i += 1
        } else {
            [arr[i], arr[high]] = [arr[high], arr[i]]
            high -= 1
        }
    }
}