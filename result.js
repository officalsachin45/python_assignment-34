// question A => 4 > 3 && 12 > 10
// 4 > 3 = true
// 12 > 10 = true
// true && true => true

console.log(4>3 && 12>10);

// question B => 4 > 3 && 10 > 12
// 4 > 3 = true
// 10 > 12 = false
// true && false = false

console.log(4>3 && 10>12);

// question C => 4 > 3 || 10 < 12
// 4 > 3 = true
// 10 < 12 = true
// true || true = true

console.log(4 > 3 || 10 < 12);

// question D => 4 > 3 || 10 > 12
// 4 > 3 = true
// 10 > 12 = false
// true || false = true

console.log(4 > 3 || 10 > 12);

//question E => !(4 > 3)
// !(true) =false 

console.log(!(4 > 3));