class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    print_interval() {
        process.stdout.write(`[${this.start}, ${this.end}]`);
    }
}

const can_attend_all_appointments = function(intervals) {
    intervals.sort((a,b) => a.start - b.start)
    let lo = intervals[0].start
    let hi = intervals[0].end

    for (let i = 1; i < intervals.length; i++) {
        let interval = intervals[i]
        if(interval.start > lo && interval.start < hi) return false
        if(interval.end > lo && interval.end < hi) return false
        lo = interval.start
        hi = interval.end
    }

    return true
};


console.log(`Can attend all appointments: ${can_attend_all_appointments([
    new Interval(1, 4),
    new Interval(2, 5),
    new Interval(7, 9),
])}`);

console.log(`Can attend all appointments: ${can_attend_all_appointments([
    new Interval(6, 7),
    new Interval(2, 4),
    new Interval(8, 12),
])}`);

console.log(`Can attend all appointments: ${can_attend_all_appointments([
    new Interval(4, 5),
    new Interval(2, 3),
    new Interval(3, 6),
])}`);
