const rl = require('readline').createInterface(process.stdin);

const data = [];

const makeDict = (string) => {
    const dict = {};

    for (let i = 0; i < string.length; i += 1) {
        const c = string[i];

        dict[c] = (dict[c] ?? 0) + 1;
    }

    return dict;
};

rl.on('line', (line) => {
    data.push(line);
});

rl.on('close', () => {
    const dict1 = makeDict(data[0]);
    const dict2 = makeDict(data[1]);

    const keys1 = Object.keys(dict1);
    const keys2 = Object.keys(dict2);

    if (keys1.length !== keys2.length) {
        process.stdout.write('0');
        return;
    }

    for (let i = 0; i < keys1.length; i += 1) {
        const key1 = keys1[i];

        if (!dict2[key1] || dict1[key1] !== dict2[key1]) {
            process.stdout.write('0');
            return;
        }
    }

    process.stdout.write('1');
});
