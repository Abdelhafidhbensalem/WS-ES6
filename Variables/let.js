/////////////////
//var redeclar /reassign
// let reassign
//const
/*let x
x=10
console.log(x)*/

//scope var global scope  // let et const bloc scope
//var x=5
if(true){
  var x=10
  //console.log(x)
}

for (var i = 0; i <5; i++) {
  setTimeout(function() {console.log(i)}, 0);
}
//////////////////////////////
function testLet() {
  let x = 10;
  //  var x=12

  if (true) {
    let x = 5;
    console.log('in block : ' + x);
  }

  console.log(x);
  // let x = 3;
}

testLet();


