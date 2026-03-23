//20. Map indices to values (index map)
const arr = ['a', 'b'];
let result = {};
for (let i = 0; i < arr.length; i++) {
  result[i] = arr[i];
}
console.log(result);