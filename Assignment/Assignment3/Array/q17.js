//16. Create range array (inclusive)
function createRange(start, end) {
  let result = [];
  if (start > end) return result;
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}
console.log(createRange(3, 6));