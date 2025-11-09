const fibonacci = function (n) {
  let currentVal = 1;
  let prevVal = 0;
  let tempVal = 0;

  /* 
    - Ensures that n is a number while still 
    accepting string values.

    - Note that this is called the "Number() function,
    not constructor (probably because we're not
    using the "new" keyword).
      - It returns the argument value "coerced" 
      (converted?) into a primitive number.
  */
  n = Number(n);

  // Edge cases
  if (n === 0) return 0;
  else if (n < 0) return "OOPS";

  /* We use "(n-1)"" as the value to stop or loop at,
    becuase they count the first fibonacci number as
    1 (not 0).
  */
  for (let i = 0; i < n - 1; i++) {
    tempVal = currentVal; //1
    currentVal = currentVal + prevVal; //1 + 1 = 2
    prevVal = tempVal; //1
  }

  return currentVal;
};

// Do not edit below this line
module.exports = fibonacci;
