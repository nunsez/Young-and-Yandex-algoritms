const fs = require('fs');

const extend = ([minP, maxP, minM, maxM], t) => [minP - t, maxP + t, minM - t, maxM + t];

const intersect = (arr1, arr2) => {
    const max = (a, b) => Math.max(a, b);
    const min = (a, b) => Math.min(a, b);

    return [max(arr1[0], arr2[0]), min(arr1[1], arr2[1]), max(arr1[2], arr2[2]), min(arr1[3], arr2[3])];
};

const solution = ([params, ...data]) => {
    const [t, d, n] = params.split(' ').map(Number);    
    let humanScope = [0, 0, 0, 0];

    for (let i = 0; i < n; i += 1) {
        const [navX, navY] = data[i].split(' ').map(Number);
        const navigatorScope = [navX + navY, navX + navY, navX - navY, navX - navY];

        const navigatorScopeEx = extend(navigatorScope, d);
        const humanScopeEx = extend(humanScope, t);

        humanScope = intersect(humanScopeEx, navigatorScopeEx);
    }

    const points = [];

    for (let xPlusY = humanScope[0]; xPlusY <= humanScope[1]; xPlusY += 1) {
        for (let xMinusY = humanScope[2]; xMinusY <= humanScope[3]; xMinusY += 1) {
            const isXEven = (xPlusY + xMinusY) % 2 === 0;

            if (isXEven) {
                const x = (xPlusY + xMinusY) / 2;
                const y = xPlusY - x;

                points.push(`${x} ${y}`);
            }
        }
    }

    return `${points.length}\n${points.join('\n')}`;
};

const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split('\n');
const result = solution(data);

fs.writeFileSync('output.txt', result, 'utf-8');
