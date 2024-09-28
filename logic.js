const solution = (value1, weight1, value2, weight2, maxW) => {
  if (
    Number.isInteger(value1) &&
    Number.isInteger(weight1) &&
    Number.isInteger(value2) &&
    Number.isInteger(weight2) &&
    Number.isInteger(maxW)
  ) {
    if (weight1 + weight2 <= maxW) return value1 + value2;
    if (weight1 <= maxW && value1 >= value2) return value1;
    if (weight2 <= maxW && value2 >= value1) return value2;
  }
  return 0;
};
console.log(`solution1`, solution(10, 5, 2, 4, 8));
console.log(`solution2`, solution(10, 5, 6, 4, 9));
console.log(`solution3`, solution(5, 3, 7, 4, 6));
