let array = [15, 24, 15, 26, 1, 8, 45];

// let array1 = array.map(el=>el*2)
// let array2 = array.filter((el, i)=>el>20)
let array3 = array.reduce((acc, cur) => acc + cur, 5);
// let array4 = array.find(el=> el>25)
// let array5 = array.findIndex(el=> el>25)

// function map (){
//   let array=[15, 24, 15, 26, 1, 8, 45]
//   for(let i=0; i< array.length; i++){
//     array[i]=array[i]+1
//   }
//   return array
// }
console.log(array3);

// function filter (){
//   let array=[15, 24, 15, 26, 1, 8, 45]
//   let tab = []
//   for(let i=0; i< array.length; i++){
//     if(array[i]>20){
//       tab=tab.concat(array[i])
//     }
//   }
//   return tab
// }

// let combine = [...array, 100, 12]

// console.log(combine)
