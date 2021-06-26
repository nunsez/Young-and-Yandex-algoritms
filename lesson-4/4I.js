const fs = require('fs');

const noAccent = (word) => word === word.toLowerCase();

const getAccents = (word) => {
    let accents = 0;

    for (const char of word) {
        if (char !== char.toLowerCase()) {
            accents += 1;
        }
    }

    return accents;
};

const solution = ([n, ...rest]) => {
    n = Number(n);
    const dict = {};

    for (let i = 0; i < n; i += 1) {
        const word = rest[i];
        const normalized = word.toLowerCase();

        if (!dict[normalized]) {
            dict[normalized] = new Set();
        }

        dict[normalized].add(word);
    }

    const sentence = rest[n];
    const words = sentence.split(' ');
    let mistakes = 0;

    for (let i = 0; i < words.length; i += 1) {
        const word = words[i];

        if (!word) {
            continue;
        }

        const normalized = word.toLowerCase();
        const variants = dict[normalized];

        if (getAccents(word) !== 1) {
            mistakes += 1;
        } else if (variants && !variants.has(word)) {
            mistakes += 1;
        }
    }

    console.log(mistakes);
};

const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split(/\r?\n/);

solution(data);