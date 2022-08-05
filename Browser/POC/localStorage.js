localStorage.setItem("name", "Sejal");
localStorage.setItem("lastName", "Singh");
localStorage.setItem("Education", "B.Tech");
localStorage.setItem("Lives", "Kanpur");

//get data
let name1 = localStorage.getItem("name");
console.log(name1);
let name2 = localStorage.name    //accessing key as an object
console.log(name2);

//delete
let deletedData = localStorage.removeItem("name");
console.log(deletedData);
