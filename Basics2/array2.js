const marvel = ["Thor", "IronMan","SpiderMan"]

const dc = ["Superman", "Batman", "Robin"]

// marvel.push(dc);   //array inside and array
// console.log(marvel);


const all = marvel.concat(dc)
console.log(all);

const difall = [...marvel, ...dc]
console.log(difall);


const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3))