const fs = require('fs');

const isCorrect = (word, firstDigitAllowed) => {
    if (!isNaN(word)) {
        return false;
    }

    if (!word.match(/^\d/) || firstDigitAllowed) {
        return true;
    }

    return false;
};

const solution = ([meta, ...rest]) => {
    let [n, registerSensitive, firstDigitAllowed] = meta.split(' ');

    n = Number(n);
    registerSensitive = registerSensitive === 'yes';
    firstDigitAllowed = firstDigitAllowed === 'yes';

    const code = rest.slice(n, rest.length).join(' ');
    const result = code.split(/[^\w]/).filter((e) => e);

    const keySet = new Set();
    const dict = new Map();

    for (let i = 0; i < n; i += 1) {
        const key = registerSensitive ? rest[i] : rest[i].toLowerCase();
        keySet.add(key);
    }

    for (let i = 0; i < result.length; i += 1) {
        const word = registerSensitive ? result[i] : result[i].toLowerCase();

        if (!keySet.has(word) && isCorrect(word, firstDigitAllowed)) {
            dict.set(word, (dict.get(word) ?? 0) + 1);
        }
    }

    const max = Math.max(...dict.values());
    const filtered = Array.from(dict).filter(([, v]) => v === max);

    console.log(filtered[0][0]);
};

const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split(/\r?\n/);

solution(data);