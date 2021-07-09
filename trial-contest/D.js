const rl = require('readline').createInterface(process.stdin);

const generate = (curr, opened, closed, n) => {
    if (curr.length === 2 * n) {
        process.stdout.write(`${curr}\n`);
        return;
    }

    if (opened < n) {
        generate(`${curr}(`, opened + 1, closed, n);
    }

    if (closed < opened) {
        generate(`${curr})`, opened, closed + 1, n);
    }
};

rl.on('line', (n) => {
    generate('', 0, 0, Number(n));

    process.exit(0);
});
