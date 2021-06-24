const fs = require('fs');

const solution = (words) => {
    const counts = words.reduce((acc, w) => {
        if (isNaN(w)) {
            acc[w] = (acc[w] ?? 0) + 1;
        }

        return acc;
    }, {});

    const maxCount = Math.max(...Object.values(counts));
    const mostRepeated = Object.entries(counts)
        .filter(([, count]) => count === maxCount)
        .map(([word]) => word)
        .sort();

    return mostRepeated.length > 0 ? mostRepeated[0] : '';
};

const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split(/\s/);
const result = solution(data);

fs.writeFileSync('output.txt', result, 'utf-8');
