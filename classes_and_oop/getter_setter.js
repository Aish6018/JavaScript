class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return `${this._password}aish`;
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}


const aish = new User("a@gmail.com","123")
console.log(aish.password)