const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})


promiseOne.then(function(){
    console.log("Promise consumed");
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve();
    },1000)
}).then(function(){
    console.log("Async two resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Aish", email: "aish@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Aish", password: "123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 2000)
})


promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("The promise is either resolved or rejected")
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Aish", password: "123"})
        }
        else{
            reject("Error: JS went wrong")
        }
    }, 1000)
})


async function consumePromise(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromise()



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://randomuser.me/api/')
//     const data = await response.json();
//     console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers();

 
fetch('https://randomuser.me/api/')
.then((response) => {
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))