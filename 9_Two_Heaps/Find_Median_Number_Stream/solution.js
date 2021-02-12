function BinaryHeap(scoreFunction) {
   this.content = []
   this.scoreFunction = scoreFunction
}

BinaryHeap.prototype = {
    push: function(element) {
        // add the new element to the end of the array
        this.content.push(element)
        // allow it to bubble up
        this.bubbleUp(this.content.length - 1)
    },

    pop: function() {
        // store the first element so we can return it later
        let result = this.content[0]
        // get the element at the end of the array
        let end = this.content.pop()
        // if there are any elements left, put the end element at the start, and let it sink down
        if (this.content.length > 0) {
            this.content[0] = end
            this.sinkDown(0)
        }
        return result
    },

    remove: function(node) {
        let length = this.content.length
        // to remove a value, we must search through the array to find it
        for (let i = 0; i < length; i++) {
            if (this.content[i] !== node) continue
            // when it is found, the process seen in 'pop' is repeated to fill up the hole
            let end = this.content.pop()
            // if the element we popped was the one we needed to remove, we're done
            if (i === length - 1) break
            // otherwise, we replace the rmeoved element with the popped one, and allow it to float up or sink down as appropriate
            this.content[i] = end
            this.bubbleUp(i)
            this.sinkDown(i)
            break
        }
    },

    size: function() {
        return this.content.length
    },

    bubbleUp: function(n) {
        // fetch the element that has to be removed
        let element = this.content[n], score = this.scoreFunction(element)
        // when at 0, an element can not go up any further
        while (n > 0) {
            // compute the parent element's index, and fetch it
            let parentN = Math.floor((n+1) / 2) -1
            parent = this.content[parentN]
            // if the parent has a lesser score, things are in order and we are done
            if (score >= this.scoreFunction(parent)) break
            // otherwise, swap the parent with the current element and continue
            this.content[parentN] = element
            this.content[n] = parent
            n = parentN
        }
    },

    sinkDown: function(n) {
        // look up the target element and its score
        let length = this.content.length,
            element = this.content[n],
            elemScore = this.scoreFunction(element)

        while (true) {
            // compute the indices of the child elements
            let child2N = (n+1) * 2,
                child1N = child2N - 1
            // this is used to store the new position of the element, if any
            let swap = null
            // if the first child exists (is inside the array) ...
            if (child1N < length) {
                // look it up and compute its score
                let child1 = this.content[child1N],
                    child1Score = this.scoreFunction(child1)
                // if the score is less than our element's, we need to swap
                if (child1Score < elemScore) swap = child1N
            }
            // do the same checks for the other child
            if (child1N < length) {
                let child2 = this.content[child2N],
                    child2Score = this.scoreFunction(child2)
                if (child2Score < (swap === null ? elemScore : child1Score)) swap = child2N
            }

            // no need to swap further, we are done
            if (swap === null) break

            // otherwise, swap and continue
            this.content[n] = this.content[swap]
            this.content[swap] = element
            n = swap
        }
    }
}



class MedianOfAStream {

    constructor() {
       this.numbers = []
    }
    insert_num(num) {
        this.numbers.push(num)
    }

    find_median(self) {
        let sorted = this.numbers.sort((a,b) => a - b)
        let len = sorted.length
        if (len % 2 === 0) {
            // if length is even, return average of middle two numbers
            let num1 = sorted[(len/2) - 1]
            let num2 = sorted[(len/2)]
            return (num1 + num2) / 2
        } else {
            // if it's odd, return the value at index  (len / 2)
            return sorted[Math.floor(len/2)]
        }
    }
};



var medianOfAStream = new MedianOfAStream()
medianOfAStream.insert_num(3)
medianOfAStream.insert_num(1)
console.log(`The median is: ${medianOfAStream.find_median()}`)
medianOfAStream.insert_num(5)
console.log(`The median is: ${medianOfAStream.find_median()}`)
medianOfAStream.insert_num(4)
console.log(`The median is: ${medianOfAStream.find_median()}`)
