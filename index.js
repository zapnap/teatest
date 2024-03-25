function randomColor() {
    return '#' + Math.random().toString(16).substr(-6);
}

module.exports = randomColor;
