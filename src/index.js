
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (!matrix || matrix.length === 0 ) 
    return result;
  result = matrix.flatMap((x, y) => y % 2 === 0 ? x : x.reverse());
    return result;
}