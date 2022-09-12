
let num1 = 10;

let num2 = num1;

num1++;

console.log(num1, num2);

let obj1 = {
  number: 10
};

let obj2 = obj1;

//obj1.number++;
console.log(obj1, obj2);

let obj3 = {
  number: 10
};

let arr1 = [1,2,3];
let arr2 = arr1;
arr1.push(4);
console.log(arr1, arr2);