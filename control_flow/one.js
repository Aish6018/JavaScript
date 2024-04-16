//if


// if (2 === "2"){
//     console.log("Executed")
// }


// const score = 200;
// if(score>=100){
//     let power = "fly";
//     console.log(`user power ${power}`)
// }


// const balance = 1000;
// //if(balance>500) console.log("test");

// if(balance<500){
//     console.log("less than 500")
// }
// else if(balance<750){
//     console.log("less than 750")
// }
// else if(balance<900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200")
// }

const userLogged = true
const debitCard = true
const loggedGoogle = false
const loggedMail = true

if(userLogged && debitCard && 2==2){
    console.log("Allowed to buy courses");
}


if(loggedGoogle || loggedMail){
    console.log("Logged in")
}

let val1 
//val1 = 5 ?? 10
val1 = null ?? 10
//val1 = undefined ?? 5
console.log(val1)


//ternary operator
const val = 5
val<10 ? console.log("Less than 10") : console.log("Greater than 10")