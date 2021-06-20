const fs = require('fs');

const maxRandVal = 1000000;

const getEntranceAndFloor = (flatNo, flatsOnFloor, floors) => {
    const floorsBefore = Math.floor((flatNo - 1) / flatsOnFloor);
    const entrance = Math.floor(floorsBefore / (floors + 1));
    const floor = floorsBefore % floors + 1;

    return [entrance, floor];
};

const check = (k1, m, k2, p2, n2, flatsOnFloor) => {
    const [entrance2, floor2] = getEntranceAndFloor(k2, flatsOnFloor, m);

    if (entrance2 === p2 && floor2 === n2) {
        return getEntranceAndFloor(k1, flatsOnFloor, m);
    }

    return [-1, -1];
};

const slow = (k1, m, k2, p2, n2) => {
    let ent = -1;
    let floor = -1;
    let goodFlag = false;

    for (let flatsOnFloor = 1; flatsOnFloor < maxRandVal + 1; flatsOnFloor += 1) {
        let [nent, nfloor] = check(k1, m, k2, p2, n2, flatsOnFloor);

        if (nent != -1) {
            goodFlag = true;
            if (ent === -1) {
                ent = nent;
                floor = nfloor;
            } else if (ent !== nent && ent !== 0) {
                ent = 0;
            } else if (floor !== nfloor && floor !== 0) {
                floor = 0;
            }
        }
    }

    if (goodFlag) {
        return [ent, floor];
    } else {
        return [-1, -1];
    }
};

const solution = (data) => {
    const [k1, m, k2, p2, n2] = data.split(' ').map(Number);

    const result = slow(k1, m, k2, p2, n2);

    return result.join(' ');
};

const input = fs.readFileSync('input.txt', 'utf-8');
const result = solution(input);

fs.writeFileSync('output.txt', result, 'utf-8');
