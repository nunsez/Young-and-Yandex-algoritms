const fs = require('fs');

const getObjFromWord = (word) => {
    const obj = {};

    for (const char of word) {
        obj[char] = (obj[char] ?? 0) + 1;
    }

    return obj;
};

const matchObjects = (word, scope) => {
    let count = 0;

    Object.keys(word).forEach((char) => {
        if (word[char] === scope[char]) {
            count += 1;
        }
    });

    return count;
};

const modifyScope = (scope, word, char, count) => {
    let result = 0;

    if (word[char] && scope[char] === word[char]) {
        result = -1;
    }

    scope[char] = (scope[char] ?? 0) + count;

    if (scope[char] === word[char]) {
        result = 1;
    }

    return result;
};

const solution = ([meta, w, s]) => {
    const [lenW, lenS] = meta.split(' ').map(Number);
    const word = getObjFromWord(w);
    const scope = getObjFromWord(s.slice(0, lenW));
    const uniqCharsCount = Object.keys(word).length;

    let matchedCharsCount = matchObjects(word, scope);
    let concurrence = 0;

    if (matchedCharsCount === uniqCharsCount) {
        concurrence += 1;
    }

    for (let i = lenW; i < lenS; i += 1) {
        const curr = s[i];
        const prev = s[i - lenW];

        matchedCharsCount += modifyScope(scope, word, prev, -1);
        matchedCharsCount += modifyScope(scope, word, curr, 1);

        if (matchedCharsCount === uniqCharsCount) {
            concurrence += 1;
        }
    }

    console.log(concurrence);
};

const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split(/\r?\n/);

solution(data);