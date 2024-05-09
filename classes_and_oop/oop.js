const user = {
    username: "Aish",
    login: 8,
    signedIn: true,


    getUserDetails: function(){
        //console.log("got user detail from db");
        //console.log(`Username: ${this.username}`)
        console.log(this);
    }
}




// console.log(user.username);
// console.log(user.getUserDetails())
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    //return this
}


const userOne = new User("Aish", 12, true)
const userTwo = new User("Ishan", 11, false)
console.log(userOne);
console.log(userTwo)