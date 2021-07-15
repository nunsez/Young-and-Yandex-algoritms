// !! test 14 failed

const fs = require('fs');

const solution = ([meta, distancesStr]) => {
    const [n, _k] = meta.split(' ').map(Number);
    const colors = distancesStr.split(' ').map(Number);

    const scope = colors.reduce((acc, color) => {
        const count = acc[color] ?? 0;
        acc[color] = count + 1;

        return acc;
    }, {});

    let l = 0;
    let r = n - 1;
    let color;

    while (color = colors[l], scope[color] > 1) {
        scope[color] -= 1;
        l += 1;
    }

    while (color = colors[r], scope[color] > 1) {
        scope[color] -= 1;
        r -= 1;
    }

    console.log(l + 1, r + 1);
};

const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split(/\r?\n/);

solution(data);
