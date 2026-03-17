//### 5. Reverse an array (manual)
//
// **Task:** Produce reversed array **without** `.reverse()`. Return new array (immutable).
//
// **Use:** loop or `reduce`
//
// **Input:** `[1,2,3]` → Output: `[3,2,1]`
//
// **Hint:** Build new array by pushing from end or unshift (inefficient).
const arr = [1, 2, 3];
const result = [];
for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
}
console.log(result);