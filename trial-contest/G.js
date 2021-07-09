// !! 15 test failed

const fs = require('fs');

const calcDistance = (x1, y1, x2, y2) => Math.abs(x2 - x1) + Math.abs(y2 - y1);

const solution = (data) => {
    const n = Number(data[0]);
    const cities = ['-1 -1'].concat(data.slice(1, n + 1));
    const k = data[n + 1];
    const [start, end] = data[n + 2].split(' ');

    const map = {};

    for (let i = 1; i <= n; i += 1) {
        const [x1, y1] = cities[i].split(' ').map(Number);
        map[i] = {};

        for (let j = 1; j <= n; j += 1) {
            const [x2, y2] = cities[j].split(' ').map(Number);
            const distance = calcDistance(x1, y1, x2, y2);

            if (distance > 0 && distance <= k) {
                map[i][j] = distance;
            }
        }
    }

    const variants = [];

    const process = (map, meta) => {
        const { from: previous, to: current, path, distance, roadsCount } = meta;

        if (current === end) {
            variants.push(roadsCount);
            return;
        }

        const ways = map[current];
        delete ways[previous];

        const entries = Object.entries(ways);

        entries.forEach(([way, dist]) => {
            delete ways[way];

            const newMeta = {
                to: way,
                from: current,
                path: `${path}${way}`,
                distance: distance + dist,
                roadsCount: roadsCount + 1,
            };

            process(map, newMeta);
        });

    };

    const startMeta = { to: start, from: '0', path: `${start}`, distance: 0, roadsCount: 0 };

    process(map, startMeta);

    if (variants.length === 0) {
        return '-1';
    }

    const result = Math.min(...variants);

    return result;
};

const input = fs.readFileSync('input.txt', 'utf-8');
const result = solution(input.split('\n'));

console.log(result);