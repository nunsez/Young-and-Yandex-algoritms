const fs = require('fs');

const solution = ([len, firstStr, ...rest]) => {
    const first = +firstStr;

    let min = 30;
    let max = 4000;
    let prev = first;

    for (let i = 0; i < +len - 1; i += 1) {
        const [noteStr, state] = rest[i].split(' ');
        const note = +noteStr;

        if (Math.abs(note - prev) < 1e-6) {
            continue;
        }

        const value = (prev + note) / 2;

        if (state === 'closer') {
            if (note > prev) {
                min = Math.max(min, value)
            } else {
                max = Math.min(max, value);
            }
        }

        if (state === 'further') {
            if (note < prev) {
                min = Math.max(min, value);
            } else {
                max = Math.min(max, value);
            }
        }

        prev = note;
    }

    return `${min} ${max}`;
};

const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split('\n');
const result = solution(data);

fs.writeFileSync('output.txt', result, 'utf-8');
