//Create a class named BasePage  
class BasePage{
    //Create methods like findElement(), clickElement(), enterText() and performCommonTasks().  
    findElement(){
        console.log("Find element using xpath")
    }
    clickElement(){
        console.log("Click on the element")
    }
    enterText(){
        console.log("Enter username")
    }
    performCommonTasks(){
        console.log("logging in")
    }
}
//Create a subclass named LoginPage.  
class LoginPage extends BasePage{
    //Override the performCommonTasks() method in the LoginPage class
    performCommonTasks(){
        console.log("login requires username and password")
    }
}
//Demonstrate the concept by creating objects for both classes and calling their methods
let bp=new BasePage

//bp.performCommonTasks()
bp.clickElement()
bp.enterText()
bp.findElement()
let lp=new LoginPage
lp.performCommonTasks()
lp.clickElement()
lp.enterText()
lp.findElement()
