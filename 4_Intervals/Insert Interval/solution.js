class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    print_interval() {
        process.stdout.write(`[${this.start}, ${this.end}]`);
    }
}

const insert = function(intervals, new_interval) {
    intervals.push(new_interval)
    intervals.sort((a,b) => a.start - b.start)

    let merged = [];
    let start = intervals[0].start
    let end = intervals[0].end

    for (let i = 1; i < intervals.length; i++) {
        let interval = intervals[i]
        if (interval.start <= end) {
            end = Math.max(interval.end, end)
        } else {
            merged.push(new Interval(start, end))
            start = interval.start
            end = interval.end
        }
    }
    merged.push(new Interval(start, end))
    return merged;
};

process.stdout.write('Intervals after inserting the new interval: ');
let result = insert([
    new Interval(1, 3),
    new Interval(5, 7),
    new Interval(8, 12),
], new Interval(4, 6));
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([
    new Interval(1, 3),
    new Interval(5, 7),
    new Interval(8, 12),
], new Interval(4, 10));
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([new Interval(2, 3),
    new Interval(5, 7),
], new Interval(1, 4));
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log()