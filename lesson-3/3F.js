const fs = require('fs');

const solution = ([str1, str2]) => {
    const gen2 = new Set();
    let answer = 0;

    for (let i = 0; i < str2.length - 1; i += 1) {
        const slice = str2.slice(i, i + 2);
        gen2.add(slice);
    }

    for (let i = 0; i < str1.length - 1; i += 1) {
        const slice = str1.slice(i, i + 2);

        if (gen2.has(slice)) {
            console.log(slice);
            answer += 1;
        }
    }

    return answer.toString();
};

const input = fs.readFileSync('input.txt', 'utf-8');
const result = solution(input.split('\n'));

fs.writeFileSync('output.txt', result, 'utf-8');
