const fs = require('fs');

const calcDistance = ([x1, y1], [x2, y2]) => Math.abs(x2 - x1) + Math.abs(y2 - y1);

const bfs = (start, adj) => {
    const entries = Object.keys(adj).map((e) => [e, -1]);
    const costs = entries.reduce((acc, [k, v]) => (acc[k] = v, acc), {});
    const queue = [start];
    costs[start] = 0;

    while (queue.length > 0) {
        const value = queue.shift();
        const neighbors = adj[value];

        neighbors.forEach((neighbor) => {
            if (costs[neighbor] === -1) {
                queue.push(neighbor);
                costs[neighbor] = costs[value] + 1;
            }
        });
    }

    return costs;
};

const solution = (data) => {
    const n = Number(data[0]);
    const cities = data.slice(1, n + 1);
    const k = data[n + 1];
    const [start, end] = data[n + 2].split(' ');

    // create adjacency list
    const adj = cities.reduce((acc, city, i) => {
        const point1 = city.split(' ').map(Number);

        const possibleWays = cities.reduce((waysAcc, city2, j) => {
            const point2 = city2.split(' ').map(Number);
            const distance = calcDistance(point1, point2);

            if (distance > 0 && distance <= k) {
                waysAcc.push(j + 1); // cities numeration starts from 1, not 0
            }

            return waysAcc;
        }, []);

        acc[i + 1] = possibleWays; // cities numeration starts from 1, not 0

        return acc;
    }, {});

    // calculate edges count for each available vertex of adjacency list
    const costs = bfs(start, adj);

    return costs[end];
};

const input = fs.readFileSync('input.txt', 'utf-8');
const result = solution(input.split('\n'));

console.log(result);
