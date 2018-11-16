let add1 = a => a + 1;
let double = a => a * 2;
let two = 2;

class Four {
    four() {
        return 4;
    }
}

module.exports = {add1, double, two, Four};

module.exports.square = a => {
    return a * a;
};
module.exports.three = 3;
module.exports.Five = class {
    five() {
        return 5;
    }
};
