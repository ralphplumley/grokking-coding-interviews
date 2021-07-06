class MaxHeap {
    constructor(capacity) {
        this.items = []
    }

    add(val) {
        this.items.push(val) // add to the end
        this.bubbleUp(this.items.length - 1) // take the last element index, and bubble up
    }

    bubbleUp(index) {
        const parent = Math.floor((index - 1) / 2)
        let max = index

        if (parent >= 0 && this.items[parent].compare(this.items[max])) {
            max = parent
        }

        if (max !== index) {
            this.swap(max, index)
            this.bubbleUp(max)
        }
    }

    swap(i, j) {
        [this.items[i], this.items[j]] = [this.items[j], this.items[i]]
    }

    peek() {
        return this.items[0]
    }
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    compare(other) {
        return this.distance_from_origin() - other.distance_from_origin();
    }

    distance_from_origin() {
        // ignoring sqrt to calculate the distance
        return (this.x * this.x) + (this.y * this.y);
    }

    print_point() {
        console.log(`[${this.x}, ${this.y}]`)
    }
}

const find_closest_points = function(points, k) {
    const maxHeap = new MaxHeap()

    for(let i = 0; i < k; i++) {
        maxHeap.add(points[i])
    }

    for(let i = k; i < points.length; i++) {
        let point = points[i]
        maxHeap.add(point)
    }

    let result = maxHeap.items.slice(0, k)
    return result
}



let points = find_closest_points([new Point(1, 3), new Point(3, 4), new Point(2, -1)], 2) //-> 1,3  and 2,-1

let result = "Here are the k points closest the origin: \n";
console.log(result);

for (let i=0; i < points.length; i++) {
    result += points[i].print_point();
}
