enum Environment{
    LOCAL="LOCAL",
    DEVELOPMENT="DEVELOPMENT",
    STAGING="STAGING",
    PRODUCTION="PRODUCTION"
}
function runTests(testprocess:Environment):void{
    console.log("Running test suites from", testprocess)
}
runTests(Environment.LOCAL);
runTests(Environment.STAGING);
runTests(Environment.PRODUCTION);



