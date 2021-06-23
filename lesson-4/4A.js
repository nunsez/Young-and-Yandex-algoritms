const fs = require('fs');

const solution = ([n, ...words]) => {
    const len = Number(n);
    const word = words[len];
    const acc = {};

    for (let i = 0; i < len; i += 1) {
        const [w1, w2] = words[i].split(' ');

        acc[w1] = w2;
        acc[w2] = w1;
    }

    return acc[word];
};

const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split('\n');
const result = solution(data);

fs.writeFileSync('output.txt', result, 'utf-8');
