//Immediately invoked function expression
//To call the function immediately as well as not to have global scope pollution 


(function chai(){
    console.log("DB CONNECTED")
})();


((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("Aish")