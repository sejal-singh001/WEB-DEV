// spread - it is used to spread array elements or object properties

//arr
let nums = [1,2,3,4,5,6,711];
let newNums = [...nums];
console.log(newNums);

//obj
const user = {
    name: "Sejal",
    age: 20,
    residence:{
        state: "New Delhi",
        city : "South Delhi"
    }
};
//override,  new key:value pair
const newUser = {...user,
     hobby: "Reading",
    };
console.log(newUser);
console.log(user);
user.residence.state = "Maharashtra";
console.log(user);
// console.log(newUser);

//rest operator
//it is used to merge all of the function arguments into an array

function foo(...args){
    console.log(args);
    args.forEach(arg=>console.log(arg))
}

foo("get", "to", "work", 1,2,3,6);