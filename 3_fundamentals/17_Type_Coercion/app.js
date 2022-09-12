

// String Coercion
String(123); // explicit
123 + ''; // implicit

let arr = [ 'an objectives', 'another objective', 'one more objective'];
for (let i = 0; i < arr.length; i++) {
  console.log((i + 1) + '_' + arr[i]);
}

// Boolean Coercion
Boolean(54); //Explicit
Boolean({}); //Explicit

//Implicit
let val;
if (!val) {
  val = 10;
}
console.log(val);

// Numeric Coercion
Number('1') // Explicit
+'123'; // Implicit
5 < '10';