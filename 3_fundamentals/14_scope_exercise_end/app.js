
// What will the following function produce? How can you improve it?
const playingWithLoops = function() {
  let total = 0;
  for (var i = 0; i < 100; i++) {
    total += i;
  }
  for (let j = i; j < 1000; j++) {
    total += j;
  }
  console.log(total);
};

// What will the following function produce?
const fun = function() {
  var num = 10;
  if (num) {
    num = 1000;
    console.log(num);
  }

  num = 100;
  console.log(num);
};

// What will the following function return?
const sumIt = function() {
  let num = 10;
  const sum1 = function() {
    let num = 100;
  };
  const sum2 = function() {
    return num * 2;
  };
  sum1();
  return sum2();
};

// What is wrong with the following function and how can you fix it?
const sumIt2 = function() {
  let num = 100;
  return num * 2
};