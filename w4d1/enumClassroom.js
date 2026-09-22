"use strict";
var Environment;
(function (Environment) {
    Environment["LOCAL"] = "LOCAL";
    Environment["DEVELOPMENT"] = "DEVELOPMENT";
    Environment["STAGING"] = "STAGING";
    Environment["PRODUCTION"] = "PRODUCTION";
})(Environment || (Environment = {}));
function runTests(testprocess) {
    console.log("Running test suites from", testprocess);
}
runTests(Environment.LOCAL);
runTests(Environment.STAGING);
runTests(Environment.PRODUCTION);
// console.log(`Running test suite against the ${env} environment...`);
