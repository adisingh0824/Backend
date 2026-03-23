//### 6. Remove duplicates (preserve order)
//
// **Task:** Remove duplicates, keep first occurrence. NO `Set`.
//
// **Use:** loop + `includes` or object lookup
//
// **Input:** `[1,2,2,3,1]` → Output: `[1,2,3]`
//
// **Hint:** Maintain seen map `{}`.
const arr = [1, 2, 2, 3, 1];
const result = [];
for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
        result.push(arr[i]);
    }
}
console.log(result);