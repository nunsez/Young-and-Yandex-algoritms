const fs = require('fs');

const solution = (words) => {
    const acc = {};
    const res = [];

    for (let i = 0; i < words.length; i += 1) {
        const word = words[i];

        if (word === '') {
            continue;
        }

        const count = acc[word] ?? 0;

        res.push(count);
        acc[word] = count + 1;
    }

    return res.join(' ');
};

const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split(/\n|\s/);
const result = solution(data);

fs.writeFileSync('output.txt', result, 'utf-8');
