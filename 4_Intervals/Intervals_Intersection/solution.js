class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    print_interval() {
        process.stdout.write(`[${this.start}, ${this.end}]`);
    }
}

const merge = function(intervals_a, intervals_b) {
    let result = [];
    for (let i = 0; i < intervals_a.length; i++) {
        for (let j = 0; j < intervals_b.length; j++) {
            let a = intervals_a[i]
            let b = intervals_b[j]

            if (b.start >= a.start && b.start <= a.end) {
                let min = Math.max(a.start, b.start)
                let max = Math.min(a.end, b.end)
                result.push(new Interval(min, max))
            }

            if (b.end >= a.start && b.end <= a.end) {
                let min = Math.max(a.start, b.start)
                let max = Math.min(a.end, b.end)
                result.push(new Interval(min, max))
            }
        }
    }
    return result;
};

// process.stdout.write('Intervals Intersection: ');
// let result = merge([new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)], [new Interval(2, 3), new Interval(5, 7)]);
// for (i = 0; i < result.length; i++) {
//     result[i].print_interval();
// }
// console.log();

// process.stdout.write('Intervals Intersection: ');
// result = merge([new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)], [new Interval(5, 10)]);
// for (i = 0; i < result.length; i++) {
//     result[i].print_interval();
// }
// console.log();

process.stdout.write('Intervals Intersection: ');
let result = merge([new Interval(13,23), new Interval(24,25)], [new Interval(15,24), new Interval(25,26)]);
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

// Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
// Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]