const fs = require('fs');

const solution = ([, string]) => {
    const seq = string.split(' ');

    for (let i = 0; i < seq.length; i += 1) {
        const currentSlice = seq.slice(i);
        const reversedSlice = [...currentSlice].reverse();

        if (currentSlice.join('') === reversedSlice.join('')) {
            const addCount = i;
            const toAddSlice = seq.slice(0, addCount).reverse();

            return `${addCount}\n${toAddSlice.join(' ')}`;
        }
    }
};

const input = fs.readFileSync('input.txt', 'utf-8');
const result = solution(input.split('\n'));

fs.writeFileSync('output.txt', result, 'utf-8');
