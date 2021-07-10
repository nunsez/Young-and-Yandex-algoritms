const fs = require('fs');

const solution = (data) => {
    const n = Number(data[0]);
    const m = Number(data[n + 1]);

    const heights = [];
    
    for (let i = 1; i < n + 1; i += 1) {
        const [_x, y] = data[i].split(' ');
        heights[i - 1] = Number(y);
    }

    const routes = [];

    for (let i = n + 2, j = 0; i < n + 2 + m; i += 1, j += 1) {
        const [start, end] = data[i].split(' ');
        routes[j] = { start: Number(start), end: Number(end) };
    }

    const prefixSum = [{ asc: 0, desc: 0 }];

    for (let i = 1; i < heights.length; i += 1) {
        const prevHeight = heights[i - 1];
        const currHeight = heights[i];

        const isAsc = currHeight > prevHeight;

        const prevDiff = prefixSum[i - 1];
        const currDiff = {};

        currDiff.asc = isAsc ? currHeight - prevHeight : 0;
        currDiff.desc = isAsc ? 0 : prevHeight - currHeight;

        prefixSum[i] = {
            asc: currDiff.asc + prevDiff.asc ,
            desc: currDiff.desc + prevDiff.desc,
        };
    }

    const result = [];

    for (let i = 0; i < routes.length; i += 1) {
        const { start, end } = routes[i];
        const isRightDirection = end > start;
        const diff = isRightDirection
            ? prefixSum[end - 1].asc - prefixSum[start - 1].asc
            : prefixSum[start - 1].desc - prefixSum[end - 1].desc;

        result.push(diff);
    }

    console.log(result.join('\n'));
};

const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split(/\r?\n/);

solution(data);