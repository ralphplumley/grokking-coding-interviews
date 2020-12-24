const fruits_into_baskets = function (fruits) {

    let windowStart = 0
    let max = 0
    let current_sum = 0
    let dict = {}
    let char_count = 0

    for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
        let char = fruits[windowEnd]
        if (!(char in dict)) {

            if (current_sum > max) {
                max = current_sum
            }

            if (char_count >= 2) {

                while (char_count >= 2) {
                    // remove or delete char (from windowStart position) from dict
                    let tmp = fruits[windowStart]
                    if (tmp in dict) {
                        if (dict[tmp] <= 1) {
                            delete dict[tmp]
                            current_sum--
                            char_count--
                        } else {
                            dict[tmp]--
                        }
                    }
                    windowStart++
                }

            }

            dict[char] = 1
            current_sum++
            char_count++

        } else {
            current_sum++
            dict[char]++
        }
    }

    if (current_sum > max) {
        max = current_sum
    }

    return max
}

module.exports = fruits_into_baskets