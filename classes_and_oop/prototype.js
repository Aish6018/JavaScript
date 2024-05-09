let myName = "Aish       "

console.log(myName.truelength);

let myHeros = ["Thor", "Spiderman"]

let heroPower = {
    Thor: "Hammer",
    Spiderman: "Sling",


    getSpiderPower: function(){
        //console.log(`Spidy power is ${this.Spiderman}`)
    }
}

Object.prototype.aish = function(){
    //console.log(`aish is present in all objects`);
}

Array.prototype.heyaish = function(){
    //console.log(`aish says hello`);
}
//heroPower.aish()

myHeros.aish();
myHeros.heyaish();

//heroPower.heyaish();
const User = {
    name: "Chai",
    mail: "chai@gmail.com"
}

const Teacher = {
    makevideo: true
}

const Teaching = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: Teaching
}

Teacher.__proto__= User


//modern syntax

Object.setPrototypeOf(Teaching, Teacher)


let anotherUsername = "ChaiAueCode         "
String.prototype.trueLenght = function(){
    console.log(`${this}`);
    //console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLenght()
"Aish".trueLenght()
"icetea".trueLenght()