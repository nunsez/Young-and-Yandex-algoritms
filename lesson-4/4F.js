const fs = require('fs');

const solution = (coll) => {
    const data = coll.reduce((acc, el) => {
        const [user, item, count] = el.split(' ');

        if (!acc[user]) {
            acc[user] = {};
        }

        if (!acc[user][item]) {
            acc[user][item] = 0;
        }

        acc[user][item] += Number(count);

        return acc;
    }, {});

    const userList = Object.keys(data).sort();

    for (let i = 0; i < userList.length; i += 1) {
        const user = userList[i];
        const itemList = Object.keys(data[user]).sort();
        const result = [];

        result.push( `${user}:`);

        for (let j = 0; j < itemList.length; j += 1) {
            const item = itemList[j];
            const count = data[user][item];

            result.push(`${item} ${count}`);
        }

        process.stdout.write(`${result.join('\n')}\n`);
    }
};

const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split(/\r?\n/);

data.pop();

solution(data);