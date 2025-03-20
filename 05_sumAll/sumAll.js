const sumAll = function(start, end) {
    if (typeof(start) !== 'number' || typeof(end) !== 'number') return 'ERROR';
    if (start < 0 || end < 0) return 'ERROR';
    if (start % 1 !== 0 || end % 1 != 0) return 'ERROR';

    let sum = 0;
    if (start < end) for(start; start <= end; start++) sum += start;
    else for(end; end <= start; end++) sum += end;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
