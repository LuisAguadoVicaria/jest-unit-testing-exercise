// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}
const oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromEuroToDollar = amount => amount*oneEuroIs.USD

const fromDollarToYen = amount => (amount/oneEuroIs.USD)*oneEuroIs.JPY

const fromYenToPound = amount => (amount/oneEuroIs.JPY)*oneEuroIs.GBP

console.log(fromEuroToDollar(1))
console.log(fromDollarToYen(1.2)) 
console.log(fromYenToPound(127.9))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }