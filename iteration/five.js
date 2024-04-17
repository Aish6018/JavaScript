const coding = ['js', 'ruby','java', 'cpp', 'python']

// coding.forEach( function (item) {
//     console.log(item);
// } )


// coding.forEach( (item)=>{
//     console.log(item)
// } )

// function printMe(item){
//     console.log(item);
// }

//coding.forEach(printMe) //give refence of the function


// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName : 'JavaScript',
        languageFile : 'js'
    },
    {
        languageName : 'Java',
        languageFile : 'java'
    },
    {
        languageName : 'Python',
        languageFile : 'py'
    }
]

myCoding.forEach( (val) => {
    console.log(val.languageName);
})