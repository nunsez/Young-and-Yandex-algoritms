const fs = require('fs');

const solution = (collection) => {
    const [length, string, number] = collection;
    const numbers = string.split(' ');

    let nearest = +numbers[0];
    let minRange = Math.abs(number - nearest);


    for (let i = 1; i < +length; i += 1) {
        const current = +numbers[i];
        const currentRange = Math.abs(number - current);

        if (currentRange < minRange) {
            nearest = current;
            minRange = currentRange;
        }

        if (minRange === 0) {
            break;
        }
    }

    return nearest.toString();
};

const input = fs.readFileSync('input.txt', 'utf-8');
const result = solution(input.split(/\n/));

fs.writeFileSync('output.txt', result, 'utf-8');
