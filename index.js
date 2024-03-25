const ntc = require('ntcjs');

function randomColor() {
    return '#' + Math.random().toString(16).substr(-6);
}

function randomColorWithName() {
    const color = randomColor();
    return {
        color,
        name: ntc.name(color)[1]
    };
}

module.exports = {
    randomColor,
    randomColorWithName
};
