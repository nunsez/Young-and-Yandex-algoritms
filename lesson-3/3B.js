const fs = require('fs');

const solution = ([data1, data2]) => {
    const length = 100;
    const coll1 = data1.split(' ').map(Number);
    const coll2 = data2.split(' ').map(Number);
    const mySet1 = Array.from({ length }).map(() => []);

    const getHash = (number) => number % length;

    const has = (set, number) => {
        const hash = getHash(number);

        return set[hash].includes(number);
    };

    const add = (set, number) => {
        if (has(set, number)) {
            return;
        }
    
        const hash = getHash(number);
        set[hash].push(number);
    };

    for (let i = 0; i < coll1.length; i += 1) {
        add(mySet1, coll1[i]);
    }

    const result = [];

    for (let i = 0; i < coll2.length; i += 1) {
        const el = coll2[i];

        if (has(mySet1, el)) {
            result.push(el);
        }
    }

    result.sort((a, b) => {
        if (a > b) {
            return 1;
        }

        if (a < b) {
            return -1;
        }

        return 0;
    });

    return result.join(' ');
};

// native JS Set solution

const solution2 = ([data1, data2]) => {
    const mySet1 = new Set(data1.split(' '));
    const mySet2 = new Set(data2.split(' '));
    const result = [];

    for (let el of mySet2) {
		if (mySet1.has(el)) {
            result.push(el);
        }
    }

    return result
        .map(Number)
        .sort((a, b) => {
            if (a > b) {
                return 1;
            }

            if (a < b) {
            return -1;
            }

            return 0;
        })
        .join(' ');
};

const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split('\n');
const result = solution(data);

fs.writeFileSync('output.txt', result, 'utf-8');
