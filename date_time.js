// let sachin = new Date();
// console.log(sachin.toISOString())
// console.log(sachin.toLocaleString())
// console.log(sachin.toString())



let date = new Date();

// a. YYYY-MM-DD HH:mm
let formatA = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
console.log(`Format A: ${formatA}`);

// b. DD-MM-YYYY HH:mm
let formatB = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
console.log(`Format B: ${formatB}`);

// c. DD/MM/YYYY HH:mm
let formatC = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
console.log(`Format C: ${formatC}`);
