const fs = require('fs');

const solution = ([m, durabilityStr, seqLen, seq]) => {
    const len = Number(seqLen)
    const durability = durabilityStr.split(' ');
    const data = {};
    
    seq.split(' ').forEach((key, i) => {
        if (i < len) {
            data[key] = (data[key] ?? 0) + 1;
        }
    });

    const result = Object.entries(data).reduce((acc, [, count], index) => (
        count <= durability[index] ? [...acc, 'NO'] : [...acc, 'YES']
        ), []);

    return result.join('\n');
};

const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split(/\n/);
const result = solution(data);

fs.writeFileSync('output.txt', result, 'utf-8');
