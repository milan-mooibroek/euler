const gridSize = 2;
//hard
exports.paths = (size) => {
    return   Math.pow(size, size)*4/2;
}

const paths = exports.paths(gridSize);
console.log(paths);