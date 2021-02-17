input = window.prompt("How many dice rolls should we make?");
let nums = new Array(5, 10, 7, 3, 14, 20);
nums.unshift(12); // push 12 on front, index 0, shifting all others down
nums.push(33);
console.log(`After shift, nums has these values: ${nums}`);
let n = nums.shift();
console.log(`n is now ${n}`);
n = nums.pop();
console.log(`n is now ${n}`);
console.log(`n is now tt ${n}`);