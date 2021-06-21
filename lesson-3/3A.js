const fs = require('fs');

const solution = (seq) => {
    const maxLen = 100_000;
    const length = Math.ceil(Math.sqrt(maxLen));
    const mySet = Array.from({ length }).map(() => []);

    const hashF = (number) => Math.ceil(number % length);

    const has = (number) => {
        const hash = hashF(number);

        return mySet[hash].includes(number);
    };

    const add = (number) => {
        if (has(number)) {
            return;
        }
    
        const hash = hashF(number);
        mySet[hash].push(number);
    };

    const getSize = () => {
        let result = 0;

        for (let hash = 0; hash < length; hash += 1) {
            result += mySet[hash].length;
        }

        return result;
    };

    for (let i = 0; i < seq.length; i += 1) {
        const number = Number.parseInt(seq[i], 10);
        add(number);
    }

    return getSize().toString();
};

const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split(' ');
const result = solution(data);

fs.writeFileSync('output.txt', result, 'utf-8');
