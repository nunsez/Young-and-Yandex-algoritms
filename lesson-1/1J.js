const fs = require('fs');

const solution = (data) => {
    const numbers = data.map(Number);
    const [a, b, c, d, e, f] = numbers;

    if (numbers.every((n) => n === 0)) {
        return '5';
    }

    if ((a === 0 && b === 0 && e !== 0) || (c === 0 && d === 0 && f !== 0)) {
        return '0';
    }

    if (a === 0 && b === 0 && e === 0) {
        const k = -c / d;
        const l = f / d;
        return `1 ${k} ${l}`;
    }

    if (c === 0 && d === 0 && f === 0) {
        const k = -a / b;
        const l = e / b;
        return `1 ${k} ${l}`;
    }

    if (a * c === b * d) {
        const k = -a / b;
        const l = e / b;
        return `1 ${k} ${l}`;
    }

    if (b === 0 && d === 0) {
        if (e * c !== a * f) {
            return '0';
        }
    
        return `3 ${e / a}` // f / c
    }

    if (a === 0 && c === 0) {
        if (e * d !== b * f) {
            return '0';
        }
    
        return `4 ${e / b}` // f / d
    }

    const y = (a * f - c * e) / (a * d - c * b);
    const x = (e / a) - ((a * b * f - b * c * e) / ((a ** 2) * d - a * b * c));

    return `2 ${x} ${y}`;
};

const input = fs.readFileSync('input.txt', 'utf-8');
const result = solution(input.split(/\r?\n/));

fs.writeFileSync('output.txt', result, 'utf-8');
