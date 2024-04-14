const user = {
    name : "Aishwarya",
    price : 399,

    welcomeMessage : function(){
        console.log(`${this.name}, welcome to website`)
    }
}


user.welcomeMessage()
user.name = "Sam"
user.welcomeMessage()


// const chai = function (){
//     let usern = "Aish"
//     console.log(this)
// }


// const chai = () => {
//     let usern = "Aish"
//      console.log(this);
// }

// chai()



const addtwo = (no1, no2) => {
    return no1+no2               //need for return statment if written in parenthesis
}

const add = (no1, no2) => (no1 + no2) //no need of return statement

console.log(addtwo(3, 4))