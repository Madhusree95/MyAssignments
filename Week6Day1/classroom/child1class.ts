import {Browser} from "./parentclass.js";
class Chrome  extends Browser{
    launchBrowser(){
        console.log("Chrome Browser launched"); 
    }
}
let chil1=new Chrome()
chil1.launchBrowser()