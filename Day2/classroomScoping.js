var browserVersion="Chrome"
function getBrowserVersion(){

if(browserVersion=="Chrome"){
  let browserVersion="Chrome"
  //var browserVersion="Chrome"
  console.log("the version inside the if block",browserVersion);
}
console.log("the version outside the if block",browserVersion);

}
console.log("the version outside the function block", browserVersion);

getBrowserVersion(browserVersion)