const fs = require('fs');

const solution = ([n, ...rest]) => {
    const len = Number(n);
    const max = {};

    for (let i = 0; i < len; i += 1) {
        const [w, h] = rest[i].split(' ').map(Number);

        max[w] = Math.max(max[w] ?? 0, h)
    }

    const ans = Object.values(max).reduce((acc, v) => acc + v, 0);

    return ans.toString();
};

const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split(/\n/);
const result = solution(data);

fs.writeFileSync('output.txt', result, 'utf-8');
