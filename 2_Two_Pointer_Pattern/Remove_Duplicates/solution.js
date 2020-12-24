// const remove_duplicates = function (arr) {
//     let dict = {}

//     // loop through entire arr (N)
//     for (let i = 0; i < arr.length; i++) {
//         let el = arr[i]
//         if (!(el in dict)) {
//             dict[el] = true
//         }
//     }

//     // could be another N (2N total)
//     let count = 0
//     for (el in dict) {
//         count++
//     }

//     return count
// }

/*
Time: O(2n) => O(n)
Space: dict could have each element once, so O(n)
*/

// ----------------------------------------- O(1) space - in place swap

const remove_duplicates = function (arr) {
    let ptr_next = 1
    let i = 1

    while (i < arr.length) {
        if (arr[ptr_next - 1] !== arr[i]) {
            arr[ptr_next] = arr[i]
            ptr_next++
        }
        i++
    }

    return ptr_next
}




module.exports = remove_duplicates