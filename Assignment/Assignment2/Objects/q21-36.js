// SECTION B — OBJECTS (15 questions)
// (Goal: property access, mutation vs immutability, merging, cloning, nested objects)
//
//
// 21. List keys and values (iteration)
// const obj = { name: 'Aman', age: 22 };
//
// for (let key in obj) {
//   console.log(key, obj[key]);
// }
//
//
// 22. Add / update property immutably
// const obj = { name: 'Aman' };
//
// const newObj = { ...obj, role: 'admin' };
//
// console.log(newObj);
//
// 23. Delete property immutably
// const user = { name: 'A', password: 'x' };
//
// const { password, ...rest } = user;
//
// console.log(rest);
//
// 24. Merge two objects (deep vs shallow)
// const a = { x: 1 };
// const b = { y: 2 };
//
// const result = { ...a, ...b };
//
// console.log(result);
//
// 25. Convert keys ↔ values (invert object)
// const obj = { a: 1, b: 2 };
//
// const inverted = Object.entries(obj).reduce((acc, [key, value]) => {
//   acc[value] = key;
//   return acc;
// }, {});
//
// console.log(inverted);
//
// 26. Deep clone simple object (no functions)
// const obj = { a: { b: 2 } };
//
// const deepCopy = JSON.parse(JSON.stringify(obj));
//
// deepCopy.a.b = 100;
//
// console.log(obj.a.b);
// console.log(deepCopy.a.b);
//
// 27. Count properties (keys)
// const obj = { a: 1, b: 2 };
//
// const count = Object.keys(obj).length;
//
// console.log(count);
//
// 28. Default values using destructuring
// const user = { name: 'A' };
//
// // Destructure with default value for role
// const { name, role = 'user' } = user;
//
// console.log(name);
// console.log(role);
//
// function greet({ name, role = 'user' }) {
//   console.log(`Hello ${name}, your role is ${role}`);
// }
//
// greet({ name: 'A' });
//
// greet({ name: 'B', role: 'admin' });
//
// 29. Pick subset of properties (pick)
// const user = { id: 1, name: 'A', email: 'a@x' };
// const keysToPick = ['id', 'email'];
//
// const picked = keysToPick.reduce((obj, key) => {
//   if (key in user) {
//     obj[key] = user[key];
//   }
//   return obj;
// }, {});
//
// console.log(picked);
//
//
// 30. Omit properties (opposite of pick)
// const user = { user: 'A', password: 'x' };
//
// // Destructure the property to omit, gather the rest
// const { password, ...safeUser } = user;
//
// console.log(safeUser);
//
//
// 31. Merge nested objects immutably (one-level nested)
// const user = {
//   name: 'A',
//   address: { city: 'Old', zip: 123 }
// };
//
// // Update city immutably
// const updatedUser = {
//   ...user,
//   address: {
//     ...user.address,
//     city: 'New'
//   }
// };
//
// console.log(updatedUser);
// /* Output:
// {
//   name: 'A',
//   address: { city: 'New', zip: 123 }
// }
// */
//
// // Original object remains unchanged
// console.log(user);
// /* Output:
// {
//   name: 'A',
//   address: { city: 'Old', zip: 123 }
// }
// */
//
// 32. Rename a key in object immutably
// const user = { fullName: 'A', age: 20 };
//
// // Destructure to pick the value and rest of the object
// const { fullName, ...rest } = user;
//
// // Create new object with renamed key
// const updatedUser = { name: fullName, ...rest };
//
// console.log(updatedUser);
// // Output: { name: 'A', age: 20 }
//
// // Original object remains unchanged
// console.log(user);
// // Output: { fullName: 'A', age: 20 }
//
//
// 33. Merge defaults with provided config
// const defaults = { retries: 3, timeout: 500 };
// const config = { timeout: 100 };
// const mergedConfig = { ...defaults, ...config };
//
// console.log(mergedConfig);
//
// 34. Check if object is empty
// const obj1 = {};
//
// const isEmpty = Object.keys(obj1).length === 0;
//
// console.log(isEmpty);
//
// SECTION C — ARRAY OF OBJECTS (30 questions)
// (Goal: real backend-like tasks — aggregation, joins, grouping, paging, search, update patterns)
//
// Use the base data for many questions (adjusted per question):
//
// 35. Total spending per user (aggregate)
// const orders = [
//   { id: 1, userId: 1, total: 500, status: 'completed' },
//   { id: 2, userId: 2, total: 300, status: 'pending' },
//   { id: 3, userId: 1, total: 200, status: 'completed' },
//   { id: 4, userId: 3, total: 700, status: 'completed' }
// ];
//
// const totalSpentPerUser = orders.reduce((acc, order) => {
//   acc[order.userId] = (acc[order.userId] || 0) + order.total;
//   return acc;
// }, {});
//
// console.log(totalSpentPerUser);
//
// 36. Completed orders only (filter)
// const completedOrders = orders.filter(order => order.status === 'completed');
//
// console.log(completedOrders);