/////////// Constructor function

/*function User(id,fullName,salary) {
this.id = id;
this.fullName = fullName;
this.salary = salary;
}

let userOne=new User(1,"Momo",5000);
let userTwo=new User(1,"Abs",7000);
let userThree=new User(1,"Arwa",8000);

console.log(userOne)
*/
/////////// ES6 class constructor
class User {
    //static properties
    static count = 0;
    constructor(_id, _fullName, _salary) {
        //Properties
        this.id = _id;
        this.fullName = _fullName || "unknown";
        this.salary = _salary <= 1000 ? _salary + 500 : _salary;
        //funct property
        this.msg = function () {
            return `hello ${this.fullName} your salary is ${this.salary}`
        }
        User.count++; 
    }
    //Methods
    newSalary(aug) {
        return this.salary * (1 + aug)
    }
    updateName(newName) {
        this.fullName = newName
    }
    //static Methods
    static sayHello(){
        return "hello from static method"
    }
    static countMembers() {
        return `${User.count} members created`
    }
}
class Admin extends User {
    constructor(_id, _fullName, _salary,permisssion){
        super(_id, _fullName, _salary)
        this.permisssion=permisssion
    }
}
let adminOne= new Admin(4,"Abs",2500,1);
console.log(adminOne)
//Instances
/*let userOne = new User(1, "Momo", 1000);
console.log(userOne.updateName("abs") )
console.log(userOne)
//let userTwo = new User(1, "Abs", 7000);
//let userThree = new User(1, "Arwa", 8000);
/*
console.log(userOne instanceof User)
console.log(userOne.constructor === User)
console.log(userOne.msg())
console.log(userOne.msg) //Nativ code
console.log(userOne.newSalary(0.2))
userOne.updateName("Momo2")
console.log(User.count)
console.log(userOne.count)//static properties sont inaccessible (undefined) pour les instances
console.log(User.count)
//TypeError: userOne.sayHello is not a function :
//console.log(userOne.sayHello())//static methods sont undefined pour les instances
console.log(User.sayHello())
console.log(User.countMembers())
///////////////drived class (inheritance)
class Admin extends User {
    constructor(_id, _fullName, _salary,permisssion){
        super(_id, _fullName, _salary)
        this.permisssion=permisssion
    }
}
let adminOne= new Admin(4,"Abs",2500,1);
console.log({...adminOne})
console.log(Admin.sayHello())
*/
// built-in js (object global)

/*
let strPri="hello world"
let strObj=new String("hello world")
console.log(typeof(strPri))
console.log(typeof(strObj))

//constructor wtf
console.log(strPri.constructor==String)
console.log(strObj.constructor==String)*/

/*function Regul() {
 console.log(this)   
}

const  Arro=()=>{
    console.log(this)
}

Regul();
//Arro();*/
