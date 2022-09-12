'use strict';

let val1 = '',
    val2,
    val3 = 0,
    val4 = 'string',
    val5 = 100,
    val6 = 50;

// Logical OR assignment - assigns the right hand operand if the left hand operand is falsy.

val1 ||= val4;

val3 ||= 90;

// Logical AND assignment - assigns the right hand operand if the left hand operand is truthy

val2 &&= val5;

val4 &&= 'new string';

val6 &&= val5;

// Nullish Coalescing assignment - assigns the right hand operand only if the left is null or undefined.

val2 ??= val4;