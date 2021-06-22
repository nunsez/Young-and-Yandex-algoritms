const fs = require('fs');

const solution = ([n, ...aAndB]) => {
    const len = Number.parseInt(n, 10);
    let trueCount = 0;

    const inputSet = new Set(aAndB);
    const trueSet = new Set();

    for (let i = 0; i < len; i += 1) {
        const pair = `${len - 1 - i} ${i}`;
        trueSet.add(pair);
    }

    for (const pair of inputSet) {
        if (trueSet.has(pair)) {
            trueCount += 1;
            trueSet.delete(pair);
        }
    }

    return trueCount.toString();
};

const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split('\n');
const result = solution(data);

fs.writeFileSync('output.txt', result, 'utf-8');
