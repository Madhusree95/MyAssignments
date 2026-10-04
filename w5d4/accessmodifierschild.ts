//child class
import {Operations} from "./accessmodifiersclassroom.js"
class mops extends Operations{
numUpdate(){
    //console.log(this.d); 
    console.log(this.mul)
}
}
let newnum=new mops
newnum.numUpdate() 
