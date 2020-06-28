Array.prototype.ourFind = function (func) {
  "use strict";
  if (!(typeof func === "Function" || typeof func === "function")) {
    throw new Error("func parameter must be a function");
  }

  const len = this.length;
  let result;
  let value;

  for (let i = 0; i < len; i++) {
    if (func(this[i], i, this)) {
      return this[i];
    }
  }
  return result;
};

const newArray = ["Car", { id: 2 }, 3, [], "carlos"].ourFind(
  (value, index, arr) => {
    if (value.id === 2) {
      return value;
    }
    //return index;
    //return arr;
  }
);

console.log(newArray);
