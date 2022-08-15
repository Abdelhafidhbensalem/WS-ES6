function Person() {
  // let that=this
  this.age = 20;

  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 1000);
}

var p = new Person();
console.log(p.age);

// setInterval(function() {
//   console.log(p.age);
// }, 500);
