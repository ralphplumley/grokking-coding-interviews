class ArrayReader {

    constructor(arr) {
        this.arr = arr;
    }

    get(index) {
        if (index >= this.arr.length)
            return Number.MAX_SAFE_INTEGER;
        return this.arr[index]
    }
};


const search_in_infinite_array = function(reader, key) {
    // lets get end
    let run = true
    let end
    let i = 0
    while (run) {
        let index = Math.pow(2,i)
        let read = reader.get(index)
        if (read === 9007199254740991) {
            end = index
            run = false
        }

        i++
    }

    // we can have some MAX_SAFE_INTEGERS at the end
    // let's make sure end doesn't point to any
    let tmp = reader.get(end)
    while (tmp === 9007199254740991) {
        end--
        tmp = reader.get(end)
    }

    // so there's at least End elements
    // binary search with start, end, middle
    let result = -1
    let start = 0
    while (start <= end) {
        let middle = Math.floor(start + (end - start) / 2)
        let num = reader.get(middle)
        if (num < key) {
            // go up
            start = middle + 1
        } else if (num > key) {
            // go down
            end = middle - 1
        } else {
            // we have a match
            result = middle
            start = end
        }
    }

    return result
};


var reader = new ArrayReader([4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]);
console.log(search_in_infinite_array(reader, 16))
console.log(search_in_infinite_array(reader, 11))
reader = new ArrayReader([1, 3, 8, 10, 15])
console.log(search_in_infinite_array(reader, 15))
console.log(search_in_infinite_array(reader, 200))
