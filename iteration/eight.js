const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
//console.log(myTotal)
const shoppCart = [
    {
        itemName : 'js course',
        price : 299
    },
    {
        itemName : 'Python course',
        price : 599
    },{
        itemName : 'java course',
        price : 499
    },
    {
        itemName : 'andriod dev couirse',
        price : 699
    }
]


const total = shoppCart.reduce((acc, item) => acc+item.price, 0)

console.log(total);