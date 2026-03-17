//### 8. Flatten 1-level nested array
//
// **Task:** Flatten only one nesting level: `[1,[2,3],4] -> [1,2,3,4]`
//
// **Use:** loop or `reduce` + spread
//
// **Input:** `[1, [2,3], 4]` → Output: `[1,2,3,4]`
//
// **Hint:** If element is array, append its elements.
const arr = [1, [2, 3], 4];
const result = arr.reduce((acc, v) => {
    if (Array.isArray(v)) {
        return [...acc, ...v];
    }
    return [...acc, v];
}, []);
console.log(result);