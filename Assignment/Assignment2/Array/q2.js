//Q-2->### Sum of array (accumulator)
//
// **Task:** Compute total sum.
//
// **Use:** `for` loop then `reduce` refactor
//
// **Input:** `[1,2,3,4]`
//
// **Output:** `10`
//
// **Hint:** Start with `total = 0`, add each element.
const arr=[1,2,3,4];
const total=arr.reduce((sum, value) => sum + value, 0);
console.log(total);