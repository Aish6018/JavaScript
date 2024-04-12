const score = 100;
console.log(score);

const no = new Number(50);
console.log(no);

console.log(no.toString());
console.log(no.toFixed())


const no1 = 23.456
console.log(no1.toPrecision(3))


const hund = 1000000
console.log(hund.toLocaleString('en-IN'))




console.log(Math);
console.log(Math.abs(-4))

console.log(Math.round(4.3))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.8))


console.log(Math.random());
console.log((Math.random()*10)+1);



const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1)) + min);