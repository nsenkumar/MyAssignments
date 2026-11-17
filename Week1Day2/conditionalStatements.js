function launchBrowser(browserName) {
    
    if (browserName === "chrome") {
        console.log("Chrome browser launched successfully.");
    } else {
        console.log(browserName + " browser launched successfully.");
    }
}


function runTests(testType) {
    
    switch (testType) {
        case "smoke":
            console.log("Executing Smoke Testing...");
            break;
        case "sanity":
            console.log("Executing Sanity Testing...");
            break;
        case "regression":
            console.log("Executing Regression Testing...");
            break;
        default:
            console.log("Default Test Type: Executing Smoke Testing...");
            break;
    }
}


console.log("--- Browser Launch Tests ---");
launchBrowser("chrome");
launchBrowser("firefox");

console.log("--- Test Execution Types ---");
runTests("sanity");
runTests("regression");
runTests("unknown"); 