const rl = require('readline').createInterface(process.stdin);

const lines = [];

rl.on('line', (line) => {
    lines.push(line);
});

rl.on('close', () => {
    const [n, ...vector] = lines.map(Number);
    let current = 0;
    let best = 0;

    for (let i = 0; i < n; i += 1) {
        if (vector[i] > 0) {
            current += 1;
            best = Math.max(best, current);
        } else {
            current = 0;
        }
    }

    process.stdout.write(best.toString());
});