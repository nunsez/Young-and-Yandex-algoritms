const fs = require('fs');

const solution = (data) => {
    const [a1, b1, a2, b2] = data.split(' ').map(Number);

    const area1 = (a1 + a2) * Math.max(b1, b2);
    const data1 = { area: area1, a: a1 + a2, b: Math.max(b1, b2) };

    const area2 = (b1 + b2) * Math.max(a1, a2);
    const data2 = { area: area2, a: b1 + b2, b: Math.max(a1, a2) };

    const area3 = (a1 + b2) * Math.max(a2, b1);
    const data3 = { area: area3, a: a1 + b2, b: Math.max(a2, b1) };

    const area4 = (a2 + b1) * Math.max(a1, b2);
    const data4 = { area: area4, a: a2 + b1, b: Math.max(a1, b2) };

    const array = [data1, data2, data3, data4];
    const { a, b } = array.reduce((acc, data) => data.area < acc.area ? data : acc, data1);

    return `${a} ${b}`;
};

const input = fs.readFileSync('input.txt', 'utf-8');
const result = solution(input);

fs.writeFileSync('output.txt', result, 'utf-8');
