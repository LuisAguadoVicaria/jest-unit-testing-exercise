// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
})

test("One euro should be 1.2 dollars", ()=>{
    const { fromEuroToDollar } = require('./app.js')
     expect(fromEuroToDollar(3.5)).toBe(4.2)
})

test("As 1.2 USD = 1 EUR = 127.9 JPY", ()=>{
    const { fromDollarToYen } = require('./app.js')
     expect(fromDollarToYen(1.2)).toBe(127.9)
})

test("As 127.9 JPY = 1 EUR = 0.8 GBP", ()=>{
    const { fromYenToPound } = require('./app.js')
     expect(fromYenToPound(127.9)).toBe(0.8)
})