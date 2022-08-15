// if else
let age = 5;
let test = (n) => {
  if (n < 18) {
    return "adol";
  } else return "adult";
};
console.log(test(age));
let test1 = (n) => {
  return n < 18 ? "adol" : "adult";
};
console.log(test1(age));

//  if     else if      else
let age = 25;
let test = (n) => {
  if (n < 18) {
    return "adol";
  } else if (n < 35) return "jeune";
  else return "adult";
};
// console.log(test(age))
let test1 = (n) => {
  return n < 18 ? "adol" : n < 35 ? "jeune" : "adult";
};
console.log(test1(age));
