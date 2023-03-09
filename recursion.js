happyDay()

let factorial = (num) => { // function factorial() {}
    if (num === 0) { // Base case
        console.log("Base case reached - returning 1");
        return 1;
    } else { // Recursive case
        console.log(`Calling factorial ${num-1}`);
        let product = num*factorial(num-1);
        console.log("Returning " + product);
        return product;
    }
}


console.log(factorial(5));

const happyDay = ()=>{
    console.log(" :) ");
    happyDay();

happyDay()
happyDay()


