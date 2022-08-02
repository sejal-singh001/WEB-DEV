//  <----------rules---------->
// 1. the value of 'this' is evaluated during the run-time,
// 2.  the value of 'this' depends from where it is called,
// 3. 'this' points to that object from where the function is being called
// 4. arr, obj, fn are all passed by references

//Type 1
function type1(){
    console.log(this.name);
}
var name = "JavaScript";
type1();    //O/p: JavaScript,  when function is called globally, this always points to window object

//Type 2
function type2(){
    console.log(this.lname);
}
var lname = "Tiwari";

var obj = {
    lname:  "Singh",
    type2
};

obj.type2();       //O/p: Singh  (becoz-> this now points to obj-> becoz it is called through obj,
                   // and so points to object's lname)

//Type 3
var food = "Pizza";
var obj = {
    food: "Pasta",
    eat : function(){
        console.log("I like to eat" +this.food);
    }
}

var foo = obj.eat;    //O/p: Pizza (becoz-> foo has now def of eat()-> eat() is now independent function)
foo();                // and so this now points to window object where it finds Pizza and not Pasta

//Type4
var length = 1;
function square(){
    let cb = function(){
        console.log(this.length*this.length);
    };
    setTimeout(cb,2000);
}

var obj = {
    length: 3,
    square
}

obj.square();    //O/p: 1 (becoz-> since setTimeout is used->after 2 sec global execution having 'this' pointing to object 
                // has been destroyed -> now 'this' is pointing to window so we get length=1
                // ques: if Global Exec is destroed, obj is destroyes-> and so this is also destroyed so how come we are accessing length?
                   //Ans: global exec and window-> both point to same objects, ie.'this' is referenced by both
                       // so if global is destroyed, window is still referring to 'this'
                // above ans sir ne kha better ans h so terms being used for my understanding only. 
                
//Type 5
function Name(fName, lName) {
    // console.log(this);
    this.firstName = fName;
    this.lastName = lName;
    // console.log(this);
  }
  
  var obj = new Name("Sunil", "Gavaskar");
  console.log(obj);
  //js creates a new object {}. 
  //js passes the object's reference to the function 
  //this-> {}- empty object
  
  // {
  //     firstName: "Sunil",
  //     lastName:"Gavaskar"
  // }
                  

