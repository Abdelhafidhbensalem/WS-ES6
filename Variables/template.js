//template literal:-->String

//1- multilines:

const msg ="this text can \n\
span mutiple lines"

//using template
const msg_temp=`this text can auto 
span mutiple lignes`
console.log(msg_temp)

/////// variables in string
let str = "mohamed";
let age = 26;
let address = {
  city: "cité el khadhra",
  cp: 1200,
};
let string =
  "my name is " +
  str +
  "and my age is " +
  age +
  "and i live in " +
  address.city;

console.log(string);
// use template literals
let string1 = `my name is ${str}and my age is ${age} and i live in ${address.city}`;
console.log(string1);
//////////////////With template literals, you can use both single and double quotes inside a string:
let text = `He's often called "Johnny"`;