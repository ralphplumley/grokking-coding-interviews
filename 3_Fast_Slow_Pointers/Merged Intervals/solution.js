class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    get_interval() {
        return "[" + this.start + ", " + this.end + "]";
    }
}


const merge = function(intervals) {
    if (intervals.length < 2) return intervals
    intervals.sort((a,b) => a.start - b.start)

    const mergedIntervals = []
    let start = intervals[0].start
    let end = intervals[0].end

    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i]
        if (interval.start <= end) {
            end = Math.max(interval.end, end)
        } else  {
            mergedIntervals.push(new Interval(start, end))
            start = interval.start
            end = interval.end
        }
    }

    mergedIntervals.push(new Interval(start, end))
    return mergedIntervals;
};
