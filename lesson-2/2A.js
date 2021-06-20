const fs = require('fs');

const solution = (seq) => {
    const numbers = seq.split(' ');

    const answer = numbers.slice(1).reduce(
        (isAsc, num, i) => (isAsc && num > numbers[i]),
        true,
    );

    return answer ? 'YES' : 'NO';
};

const input = fs.readFileSync('input.txt', 'utf-8');
const result = solution(input);

fs.writeFileSync('output.txt', result, 'utf-8');
