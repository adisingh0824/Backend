//### 9. Rotate array by k steps (right)
//
// **Task:** Rotate right by `k` positions; immutably return result.
//
// **Use:** slice + spread or loop
//
// **Input:** `[1,2,3,4], k=1` → Output: `[4,1,2,3]`
//
// **Hint:** Normalize `k` with `k = k % length`.
const arr = [1, 2, 3, 4];
let k = 1;
k = k % arr.length;
const result = [
    ...arr.slice(-k),
    ...arr.slice(0, arr.length - k)
];
console.log(result);