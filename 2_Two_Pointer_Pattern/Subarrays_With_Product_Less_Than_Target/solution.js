const find_subarrays = function (arr, target) {
    let result = [],
        product = 1,
        left = 0;
    for (let right = 0; right < arr.length; right++) {
        product *= arr[right];
        while ((product >= target && left < arr.length)) {
            product /= arr[left];
            left += 1;
        }
        // since the product of all numbers from left to right is less than the target therefore,
        // all subarrays from left to right will have a product less than the target too; to avoid
        // duplicates, we will start with a subarray containing only arr[right] and then extend it
        let window = new Array()
        for (let i = right; i > left - 1; i--) {
            window.unshift(arr[i]);
            const tempList = []
            window.forEach(el => tempList.push(el))
            result.push(tempList);
        }
    }
    return result;
}


console.log(find_subarrays([2, 5, 3, 10], 30))
// console.log(find_subarrays([8, 2, 6, 5], 50))



