const rl = require('readline').createInterface(process.stdin);

const clients = {};

rl.on('line', (line) => {
    const [client, thing, value] = line.split(' ');

    if (!clients[client]) {
        clients[client] = {};
    }

    if (!clients[client][thing]) {
        clients[client][thing] = 0;
    }

    clients[client][thing] += Number(value);
});

rl.on('close', () => {
    const sortedClients = Object.keys(clients).sort();
    const clientsLength = sortedClients.length;

    for (let i = 0; i < clientsLength; i += 1) {
        const client = sortedClients[i];
        const sortedThing = Object.keys(clients[client]).sort();
        const thingsLength = sortedThing.length;

        console.log(`${client}:`);

        for (let j = 0; j < thingsLength; j += 1) {
            const thing = sortedThing[j];
            const count = clients[client][thing];

            console.log(`${thing} ${count}`);
        }
    }
});