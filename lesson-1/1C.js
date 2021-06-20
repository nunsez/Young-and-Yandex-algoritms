const fs = require('fs');

const normalizeNumber = (str) => {
    let result = '';

    for (const i in str) {
        const char = str[i];

        if (!isNaN(char)) {
            result = `${result}${char}`;
        }
    }

    if (result.length === 7) {
        result = `495${result}`;
    }

    return result.length > 10 ? result.slice(1) : result;
};

const calculateAnswer = (a, b) => (a === b ? 'YES' : 'NO');

const solution = (input) => {
    const [newNumber, number1, number2, number3] = input;

    const n0 = normalizeNumber(newNumber);
    const n1 = normalizeNumber(number1);
    const n2 = normalizeNumber(number2);
    const n3 = normalizeNumber(number3);

    const a1 = calculateAnswer(n1, n0);
    const a2 = calculateAnswer(n2, n0);
    const a3 = calculateAnswer(n3, n0);

    const answer = `${a1}\n${a2}\n${a3}`;

    return answer;
};

const args = fs.readFileSync('input.txt', 'utf-8');
const result = solution(args.split(/\r?\n/));

fs.writeFileSync('output.txt', result, 'utf-8');
