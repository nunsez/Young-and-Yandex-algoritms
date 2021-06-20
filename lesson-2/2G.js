const fs = require('fs');

const solution = (data) => {
    const seq = data.map(Number).sort((a, b) => {
        if (a > b) {
            return 1;
        }

        if (a < b) {
            return -1;
        }

        return 0;
    });
    const { length: len } = seq;
    const p1 = seq[len - 1] * seq[len - 2];
    const p2 = seq[0] * seq[1];

    return p1 >= p2 ? `${seq[len - 2]} ${seq[len - 1]}` : `${seq[0]} ${seq[1]}`;
};

const input = fs.readFileSync('input.txt', 'utf-8');
const result = solution(input.split(' '));

fs.writeFileSync('output.txt', result, 'utf-8');
