const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`)
}


const myArr = ["js", "java", "cpp", "ruby"]

for (const key in myArr) {
    //console.log(myArr[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")

// for (const key in map) {
//    console.log(key)    
// }