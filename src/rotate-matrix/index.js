const rotateMatrix = arr => {
  const matrix = arr.map((item, index) => {
    const result = arr.reduce((matrixRow, current) => {
      matrixRow.push(current[index]);
      return matrixRow;
    }, []);
    return result.reverse();
  });
  return matrix;
};

module.exports = rotateMatrix;
