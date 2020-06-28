Array.prototype.ourMap = function (func) {
  "use strict";
  if (!(typeof func === "Function" || typeof func === "function")) {
    throw new Error("func parameter must be a function");
  }

  const len = this.length;
  let result = new Array();
  let value;

  for (let i = 0; i < len; i++) {
    result.push(func(this[i], i, this));
  }
  return result;
};

const newArray = ["Car", 2, 3, [], "carlos"].ourMap((value, index, arr) => {
  return value;
  //return index;
  return arr;
});

console.log(newArray);
