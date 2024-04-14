let a = 10;

if(true){
    let a = 20;
    const b = 30;
    console.log("Inner: ", a)
}

console.log("Outer: ", a);

function one(){
    const username = "Aish";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    //console.log(website)           //outside the scope

    two()
}

//one()