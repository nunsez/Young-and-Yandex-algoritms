const fs = require('fs');

const solution = (input) => {
    const NO_SOLUTION = 'NO SOLUTION';
    const MANY_SOLUTIONS = 'MANY SOLUTIONS';
    const [a, b, c] = input.map(Number);

    if (c < 0) {
        return NO_SOLUTION;
    }

    if (a === 0) {
        if (b === c ** 2) {
            return MANY_SOLUTIONS;
        }

        return NO_SOLUTION;
    }

    const x = (c ** 2 - b) / a;

    return Math.floor(x) === x ? String(x) : NO_SOLUTION;
};

const args = fs.readFileSync('input.txt', 'utf-8');
const result = solution(args.split(/\r?\n/));

fs.writeFileSync('output.txt', result, 'utf-8');
