//### 4. Minimum value with reduce
//
// **Task:** Find minimum using `reduce`.
//
// **Use:** `reduce`
//
// **Input:** `[7, 3, 9, 0]` → Output: `0`
//
// **Hint:** `arr.reduce((min, v) => v < min ? v : min, Infinity)`
const arr = [7, 3, 9, 0];
const min = arr.reduce((min, v) => v < min ? v : min, Infinity);
console.log(min);