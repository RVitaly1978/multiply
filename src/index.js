module.exports = function multiply(first, second) {
  let number_first = BigInt(first);
  let number_second = BigInt(second);
  let multi = number_first * number_second;
  return String(multi);
}

// module.exports = function multiply(first, second) {
//   let number_first = parseInt(first, 10);
//   let number_second = parseInt(second, 10);
//   let multi = number_first * number_second;
//   return String(multi);
// }