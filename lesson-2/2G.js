const fs = require('fs');

const solution = (data) => {
    const seq = data.map(Number);

    let min1 = min2 = Infinity;
    let max1 = max2 = -Infinity;

    for (let i = 0; i < seq.length; i += 1) {
        const cur = seq[i];

        if (cur >= max1) { max2 = max1; max1 = cur; }
        else if (cur >= max2) { max2 = cur; }

        if (cur <= min1) { min2 = min1; min1 = cur; }
        else if (cur <= min2) { min2 = cur; }
    }

    return max1 * max2 >= min1 * min2 ? `${max2} ${max1}` : `${min1} ${min2}`;
};

const input = fs.readFileSync('input.txt', 'utf-8');
const result = solution(input.split(' '));

fs.writeFileSync('output.txt', result, 'utf-8');
