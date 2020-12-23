const longest = function (str, k) {
    let ans = -1, current_run = 0, windowStart = 0, num_chars = 0, dict = {}

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let char = str[windowEnd]
        if (char in dict) {
            dict[char]++
            current_run++
        } else {
            if (num_chars < k) {
                dict[char] = 1
                num_chars++
                current_run++
            } else {
                // decrement from dict
                while (num_chars > k - 1) {
                    let tmp_char = str[windowStart]
                    if (dict[tmp_char] > 1) {
                        dict[tmp_char]--
                        windowStart++
                    } else {
                        delete dict[tmp_char]
                        num_chars--
                    }

                    current_run--
                }

            }
        }

        if (current_run > ans) {
            ans = current_run
        }
    }



    return ans
}
module.exports = longest