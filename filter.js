Array.prototype.ourFilter = function (func) {
  "use strict";
  if (!(typeof func === "Function" || typeof func === "function")) {
    throw new Error("func parameter must be a function");
  }

  const len = this.length;
  let result = new Array();
  let value;

  for (let i = 0; i < len; i++) {
    if (func(this[i], i, this)) {
      result.push(func(this[i], i, this));
    }
  }
  return result;
};

const newArray = ["Car", 2, 3, [], "carlos"].ourFilter((value, index, arr) => {
  if (value === 2) {
    return value;
  }
  //return index;
  //return arr;
});

console.log(newArray);
