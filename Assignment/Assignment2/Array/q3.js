//### 3. Maximum value without Math.max
//
// **Task:** Find largest number by scanning once.
//
// **Use:** loop or `reduce`
//
// **Input:** `[5, 1, 9, 3]` → Output: `9`
//
// **Hint:** Initialize `max` to `-Infinity` or first element
const arr=[5,1,9,3];
let max=-Infinity;
for (let i=0;i<arr.length; i++){
    if (arr[i]>max){
        max = arr[i];
    }
}
console.log(max);