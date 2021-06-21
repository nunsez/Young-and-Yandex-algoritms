const fs = require('fs');

const solution = (text) => {
    const words = text.split(/\s|\n/);
    const uniq = new Set(words);
    const count = uniq.has('') ? uniq.size - 1 : uniq.size;

    return count.toString();
};

const input = fs.readFileSync('input.txt', 'utf-8');
const result = solution(input);

fs.writeFileSync('output.txt', result, 'utf-8');
