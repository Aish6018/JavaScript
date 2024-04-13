const sym = Symbol("key1")

const obj = {
    name : "Aishwarya",
    age : 22,
    [sym] : "mykey1",
    location : "Vasai",
    email : "aish@gmail.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday","Saturday"]
}


// console.log(obj.email);
// console.log(obj["email"])
// console.log(obj[sym])
 

// obj.email = "aishwarya@gmail.com"
// Object.freeze(obj);
// console.log(obj)
// obj.email = "ishan@gmail.com"


obj.greeting = function(){
    console.log("Hello user")
}

console.log(obj.greeting)