abstract class playwright{
    //implemented method
    fill(){
        console.log("fill the credentials")}
    //unimplemented method
    abstract locator():void
    //implemented method
    clear(){
       console.log("clear the data");
    }
    //unimplemented method
    abstract frame():void
}
//normal or concrete class for implementation and object creation.
class automation extends playwright{
    locator():void{
        console.log("playwright locator is used")
    }
    frame():void {
        console.log("frame is captured");  
    }
}
let pwautomation=new automation()
pwautomation.fill()
pwautomation.frame()
pwautomation.locator()
pwautomation.clear()