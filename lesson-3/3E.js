const fs = require('fs');

const solution = ([numbers, number]) => {
    const xyz = new Set(numbers.split(' '));
    const digits = new Set(number.split(''));
    const toAdd = new Set();

    for (const digit of digits) {
        if (!xyz.has(digit)) {
            toAdd.add(digit);
        }
    }

    return toAdd.size.toString();
};

const input = fs.readFileSync('input.txt', 'utf-8');
const result = solution(input.split('\n'));

fs.writeFileSync('output.txt', result.toString(), 'utf-8');
