import {Browser} from "./parentclass.js";
class Edge  extends Browser{
    launchBrowser(){
        console.log("Edge Browser launched");   
    }
}
let chil2=new Edge()
chil2.launchBrowser()