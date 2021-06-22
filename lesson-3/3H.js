const fs = require('fs');

const solution = ([n, ...birdsCoords]) => {
    const set = new Set();

    for (let i = 0; i < Number(n); i += 1) {
        const [x] = birdsCoords[i].split(' ');
        set.add(x);
    }

    return set.size.toString();
};

const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split('\n');
const result = solution(data);

fs.writeFileSync('output.txt', result, 'utf-8');
