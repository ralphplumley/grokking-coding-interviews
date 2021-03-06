function binary_search(arr, target) {
    let low = 0,
        high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    if (low > 0) {
        return low - 1;
    }
    return low;
}


function find_closest_elements(arr, K, X) {
    const result = []
    const index = binary_search(arr, X);
    let leftPointer = index,
        rightPointer = index + 1;
    const n = arr.length;
    for (let i = 0; i < K; i++) {
        if (leftPointer >= 0 && rightPointer < n) {
            const diff1 = Math.abs(X - arr[leftPointer]);
            const diff2 = Math.abs(X - arr[rightPointer]);
            if (diff1 <= diff2) {
                result.unshift(arr[leftPointer]);
                leftPointer -= 1;
            } else {
                result.push(arr[rightPointer]);
                rightPointer += 1;
            }
        } else if (leftPointer >= 0) {
            result.unshift(arr[leftPointer]);
            leftPointer -= 1;
        } else if (rightPointer < n) {
            result.push(arr[rightPointer]);
            rightPointer += 1;
        }
    }

    return result

}



// console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([5, 6, 7, 8, 9], 3, 7)}`)
// console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 6)}`)
// console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 10)}`)
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([0,0,1,2,3,3,4,7,7,8], 3, 5)}`) // => [3,3,4]




























