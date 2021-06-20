const fs = require('fs');

const solution = (collection) => {
    const SEQUENCE_END = -2e9;
    const first = Number(collection[0]);

    let isWeakly = false;
    let isConstant = true;
    let isAscending = true;
    let isDescending = true;

    for (let i = 0; i < collection.length; i += 1) {
        const current = Number(collection[i]);
        const next = Number(collection[i + 1]);

        if (next === SEQUENCE_END) {
            break;
        }

        if (next !== first) {
            isConstant = false;
        }

        if (!isWeakly && next === current) {
            isWeakly = true;
        }

        if (isAscending && next < current) {
            isAscending = false;
        }

        if (isDescending && next > current) {
            isDescending = false;
        }
    }

    const weaklyPart = isWeakly ? 'WEAKLY ' : '';

    if (isConstant) {
        return 'CONSTANT';
    }

    if (isAscending) {
        return `${weaklyPart}ASCENDING`;
    }

    if (isDescending) {
        return `${weaklyPart}DESCENDING`;
    }

    return 'RANDOM';
};

const input = fs.readFileSync('input.txt', 'utf-8');
const result = solution(input.split(/\n/));

fs.writeFileSync('output.txt', result, 'utf-8');
