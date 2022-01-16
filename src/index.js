
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix && matrix.length ? matrix.map((v, k) => k % 2 ? v.reverse() : v).flat() : []
}