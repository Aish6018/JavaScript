class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }


    static createId(){
        return `123`
    }
}

const aish = new User("aish");
//console.log(aish.createId());


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email;
    }
}

const iphone = new Teacher("Ishan", "isha@teacher.com");

iphone.logMe();
console.log(iphone.createId());