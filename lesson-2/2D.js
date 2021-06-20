const fs = require('fs');

const solution = (collection) => {
    const answer = collection
        .split(' ')
        .reduce((acc, str, i, numbers) => {
            if (i > numbers.length - 3) {
                return acc;
            }

            const current = +str;
            const next = +numbers[i + 1];
            const next2 = +numbers[i + 2];

            return next > current && next > next2 ? acc + 1 : acc;
        }, 0);

    return answer.toString();
};

const input = fs.readFileSync('input.txt', 'utf-8');
const result = solution(input);

fs.writeFileSync('output.txt', result, 'utf-8');
