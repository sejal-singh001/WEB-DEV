// let cricketer = {
//     firstName: "Kapil",
//     lastName: "Dev",
// welcome: function () {
//     console.log(`Welcome ${this.firstName} ${this.lastName}`);
// }
// };

// let welcome=function (email,mobileNumber,location) {
//     console.log(`Welcome ${this.firstName} ${this.lastName},
//         thank you for signing up! Yout email id is ${email},
//         Your registered number is ${mobileNumber},
//         Your location is ${location}`);
// }
// cricketer.welcome();

// let cricketer2={
//     firstName: "Ravi",
//     lastName: "Shastri",
// }

// function borrow 
// Calls a method of an object, substituting another object for the current object.
// cricketer.welcome.call(cricketer2);

// cricketer2.welcome();

//call method
//syntax-> function_name.call(obj_to_which_'this'_should_point)

// welcome.call(cricketer,"kpdev@gmail.com",19191919191,"India");
// welcome.call(cricketer2, "ravishas@gmail.com", 5551919191, "India");

//apply method-> same as call but arg in arr
// welcome.apply(cricketer2, ["ravishas@gmail.com", 5551919191, "India"]);

//bind method-> same as call, but fn is be called explicitly
// let bindedFn = welcome.bind(cricketer2,"ravishas@gmail.com",5551919191,"India");
// this->cricketer2
// bindedFn(); 


// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   },
// };

// setTimeout(function () {
//   user.sayHi();
// }, 1000);


// let user = {
//   firstName: "John"
// };

// function func() {
//   console.log(this.firstName);
// }

// let funcUser = func.bind(user);
// user = {
//     a:10
// }

// funcUser(); // John

// polyfill for bind 
let car = {
  name: "Thar",
  brand: "Mahindra"
}

let carDescription = function (date,price) {
  console.log(`I bought  a new ${this.brand} ${this.name} on ${date} for INR ${price}`);
};

// var bindedFn = carDescription.bind(car);
// bindedFn();

//making a polyfill of bindedFn
Function.prototype.mybind = function (...arg) {
  // console.log(this);
  let fnObj = this;
  console.log(fnObj);
  console.log(arg);
  let paramSliced = arg.slice(1);
  return function () {
    fnObj.apply(arg[0], paramSliced);
  }
}

var myBindedFn = carDescription.mybind(car, "22 Jul", "20lacs");
myBindedFn();


