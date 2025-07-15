const myNums = [1, 2, 3]


const myTotal = myNums.reduce(function (accum, currval) {
    console.log(`accumulator: ${accum}  and  current value: ${currval}`);
    return accum + currval
}, 0)                   // 0 is the initial value of accumlator

console.log(myTotal);

/*
accumulator: 0  and  current value: 1
accumulator: 1  and  current value: 2
accumulator: 3  and  current value: 3
6
*/


// ******** using arrow function ********
const myTotal2 = myNums.reduce( (acc, curr) => acc + curr, 0)

console.log(myTotal2);        // 6



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);                // 22996