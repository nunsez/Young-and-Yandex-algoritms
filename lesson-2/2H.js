const fs = require('fs');

const solution = (seq) => {
    let mx1 = mx2 = mx3 = -Infinity;
    let mn1 = mn2 = Infinity;

    for (let i = 0; i < seq.length; i += 1) {
        const cur = seq[i];

        if (cur >= mx1) { mx3 = mx2; mx2 = mx1; mx1 = cur; }
        else if (cur >= mx2) { mx3 = mx2; mx2 = cur; }
        else if (cur >= mx3) { mx3 = cur; }

        if (cur <= mn1) { mn2 = mn1; mn1 = cur; }
        else if (cur <= mn2) { mn2 = cur; }
    }

    if (mn2 < 0 && mx1 > 0 && mn1 * mn2 > mx2 * mx3) {
        return `${mx1} ${mn2} ${mn1}`;
    }

    return `${mx1} ${mx2} ${mx3}`;
};

const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split(' ').map(Number);
const result = solution(data);

fs.writeFileSync('output.txt', result, 'utf-8');
