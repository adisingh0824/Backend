//15. Sliding window sums (window size k)
const arr = [1, 2, 3, 4];
let k = 2;
let result = [];
let windowSum = 0;
for (let i = 0; i < k; i++) {
  windowSum += arr[i];
}
result.push(windowSum);
for (let i = k; i < arr.length; i++) {
  windowSum = windowSum + arr[i] - arr[i - k];
  result.push(windowSum);
}
console.log(result);