function sayMyName(){
    console.log("A")
    console.log("I")
    console.log("S")
    console.log("H")
}


//sayMyName();

// function add(no1, no2){
//     console.log(no1+no2)
// }

function add(no1, no2){
    let result = no1 + no2;
    return result;
}
console.log(add(3, 4))



function user(username){
    if(username === undefined){
        console.log("Please enter your username")
        return
    }
    return `Hello ${username}, you have logged in`
}
console.log(user("Aishwarya"))


function shoppingCart(...num){
    return num;
}

//console.log(shoppingCart(200, 300, 400))

const user1 = {
    user : "Aish",
    price : 3000
}


function handleObject(anyObj){
    console.log(`User is ${anyObj.user}, price is ${anyObj.price}`)

}

//handleObject(user1);
handleObject({
    user : "Ishan",
    price : 299
})


const arr = [200, 300, 400, 500]

function getSecondValue(getArr){
    return getArr[1]
}

console.log(getSecondValue(arr));