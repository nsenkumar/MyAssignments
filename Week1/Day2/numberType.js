
function checkNumberType(number) {    
    
    if (number > 0) {
       
        return "Positive";
    } else if (number < 0) {
        
        return "Negative";
    } else {
       
        return "Neutral";
    }
}


let myNumber = 12;


let result = checkNumberType(myNumber);
console.log("The number is:", result); 

console.log(checkNumberType(-9)); 
console.log(checkNumberType(0));  