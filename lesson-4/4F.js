const rl = require('readline').createInterface(process.stdin);

const data = {};
const result = [];

rl.on('line', (line) => {
    const [user, item, count] = line.split(/\s/);

    if (!data[user]) {
        data[user] = {};
    }

    const prevCount = data[user][item] ?? 0;

    data[user][item] = prevCount + Number(count);
});

rl.on('close', () => {
    const userList = Object.keys(data).sort();

    for (let i = 0; i < userList.length; i += 1) {
        const user = userList[i];
        const itemList = Object.keys(data[user]).sort();

        result.push(user.concat(':'));

        for (let j = 0; j < itemList.length; j += 1) {
            const item = itemList[j];

            result.push(`${item} ${data[user][item]}`);
        }

        // memory and speed optimization, still can't pass last test :(
        delete data[user];

        if (result.length > 88) {
            process.stdout.write(result.join('\n').concat('\n'));
            result.splice(0);
        }
    }

    process.stdout.write(result.join('\n').concat('\n'));
});
