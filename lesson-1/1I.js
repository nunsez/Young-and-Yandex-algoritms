const fs = require('fs');

const solution = (data) => {
    const [a, b, c, d, e] = data.map(Number);
    const [min1, min2] = [a, b, c].sort().slice(0, 2);
    const [o1, o2] = [d, e].sort();

    if (min1 <= o1 && min2 <= o2) {
        return 'YES';
    }

    return 'NO';
};

const input = fs.readFileSync('input.txt', 'utf-8');
const result = solution(input.split(/\r?\n/));

fs.writeFileSync('output.txt', result, 'utf-8');
