
const browserVersion = "Chrome";

function testVarScope() {
    
    if (browserVersion === "Chrome") {
      
        var browserVersion = "Firefox"; 
    }
    
        console.log("Result with 'var':", browserVersion); 
}

function testLetScope() {
    
    if (browserVersion === "Chrome") {
       
        let browserVersion = "Firefox"; 
        console.log("Inside block (let):", browserVersion); 
    }
    
        console.log("Result with 'let':", browserVersion); 
}

console.log("Test Result");
testVarScope();
testLetScope();