function isOddOrEven(number) {    
    
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let testNumber = 7;

let result = isOddOrEven(testNumber);
console.log("The number is:", result); 

console.log("For 4:", isOddOrEven(4));   
console.log("For 15:", isOddOrEven(15)); 