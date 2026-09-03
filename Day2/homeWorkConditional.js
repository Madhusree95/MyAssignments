function launchBrowser(browserName){
    if (browserName=="Chrome"){
        console.log("browser is chrome");
    }
    else{
        console.log("browser used is not chrome");
    }
}
launchBrowser("Chrome")
launchBrowser("edge")

function runTests(testType="smoke"){
    switch(testType)
    {
        case "sanity":
            console.log("testtype is sanity");
            break;
        case "Regression":
            console.log("testtype is regression");
            break;
        case "smoke":
            console.log("testtype is smoke")
            break;
    }
}
runTests("sanity")
runTests()
