const fs = require('fs');

const openAccount = (state, name) => {
    if (!state[name]) {
        state[name] = 0;

        return true;
    }

    return false;
};

const deposit = (state, name, sum) => {
    openAccount(state, name);

    state[name] += Number(sum);
};

const withdraw = (state, name, sum) => {
    openAccount(state, name);

    state[name] -= Number(sum);
};

const balance = (state, name) => {
    const sum = state[name] ?? 'ERROR';

    console.log(sum);
};

const transfer = (state, source, target, sum) => {
    openAccount(state, source);
    openAccount(state, target);

    withdraw(state, source, sum);
    deposit(state, target, sum);
};

const income = (state, percent) => {
    Object.entries(state)
        .filter(([, sum]) => sum > 0)
        .forEach(([name, sum]) => {
            const toAdd = Math.floor(sum / 100 * Number(percent));

            deposit(state, name, toAdd);
        });
};

const operationsMap = {
    'DEPOSIT': deposit,
    'WITHDRAW': withdraw,
    'BALANCE': balance,
    'TRANSFER': transfer,
    'INCOME': income,
};

const solution = (coll) => {
    const state = {};

    coll.forEach((el) => {
        const [operation, ...payload] = el.split(' ');

        operationsMap[operation](state, ...payload);
    });
};

const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split(/\r?\n/);

data.pop();

solution(data);