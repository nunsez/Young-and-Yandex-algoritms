const fs = require('fs');

const solution = ([fieldStr, ...minesStr]) => {
    const [rowMax, colMax] = fieldStr.split(' ').map(Number);
    const mines = minesStr.map((str) => str.split(' ').map(Number));

    const result = [];

    for (let row = 1; row <= rowMax; row += 1) {
        const line = [];

        for (let col = 1; col <= colMax; col += 1) {
            const minesCount = mines.reduce((acc, [y, x]) => {
                if (acc === '*' || y === row && x === col) {
                    return '*';
                }

                if (Math.abs(row - y) <= 1 && Math.abs(col - x) <= 1) {
                    return acc + 1;
                }

                return acc;
            }, 0);

            line.push(minesCount);
        }

        result.push(line.join(' '));
    }

    return result.join('\n');
};

const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split('\n');
const result = solution(data);

fs.writeFileSync('output.txt', result, 'utf-8');
