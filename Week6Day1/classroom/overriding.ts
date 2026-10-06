
class Browser{
    browserVersion(){
    console.log("version is 12.3"); 
}
}
class Chrome extends Browser{
    browserVersion() {
        console.log("chrome version is 102.3");
        //super.login()        
    }
}
let ch=new Chrome()
ch.browserVersion()