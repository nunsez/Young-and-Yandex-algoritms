const fs = require('fs');

const solution = (arr) => {
    const [a, b, c] = arr.map(Number);

    if ((a >= b + c) || (b >= a + c) || (c >= a + b)) {
        return 'NO';
    }

    return 'YES';
};

const args = fs.readFileSync('input.txt', 'utf-8');
const result = solution(args.split(/\r?\n/));

fs.writeFileSync('output.txt', result);
