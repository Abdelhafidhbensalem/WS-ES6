// Array
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let [a,b,c,,d] = arr;
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// console.log(a,b,c);

// Object
// let obj = { foo: 111, bar: 222, foobar: 333 };
// let {foo:x,bar:y} = obj;
// console.log(x,y);

// swap values
let x = 1;
let y = 2;

/*let temp = x;
x = y;
y = temp;*/
[x, y] = [y, x];
console.log(x, y);
// console.log(arr);

// skip values
// let [a, , ,c, , , , b] = arr;
// console.log(arr);

// function params
function printMyInfo({ name, age }) {
  return `My name is ${name} and my age is ${age}`;
}

let info = { name: 'slim', age: 28 };
console.log(printMyInfo(info));

// let arr1=[{ foo: 111, bar: 222, foobar: 333 }, { foo: 11, bar: 22, foobar: 33 }, { foo: 1, bar: 2, foobar: 3 }]
// let [a, , c]=arr1
// console.log(a, c)
