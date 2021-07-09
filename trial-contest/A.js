const rl = require('readline').createInterface(process.stdin);

const lines = [];

rl.on('line', (line) => {
    lines.push(line);
});

rl.on('close', () => {
    const [J, S] = lines;
    let counter = 0;

    const set = new Set(J.split(''));

    for (const char of S) {
        if (set.has(char)) {
            counter += 1;
        }
    }

    process.stdout.write(counter.toString());
});