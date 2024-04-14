//const tinder = new Object();   //singleton object

const tinder = {}   //non singleton object
tinder.id = "123abc";
tinder.name = "Sam";
tinder.isLoggedIn = true;
//console.log(tinder)


const regUser = {
    email : "some@gmail.come",
    fullname : {
        userFullName : {
            firstName : "Aish",
            lastName : "Chavan"
        }
    }
}
// console.log(regUser.fullname)
// console.log(regUser.fullname.userFullName)
// console.log(regUser.fullname.userFullName.firstName)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"c", 6:"d"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3)


console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(Object.entries(tinder))

console.log(tinder.hasOwnProperty("isLoggedIn"))

const course = {
    courseName : "Js",
    price : 999,
    instruct : "Hitesh"
}

const {instruct} = course;
console.log(instruct)