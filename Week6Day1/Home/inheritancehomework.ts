//Define a class `WebComponent`
class WebComponent{
    constructor(selector:string){ //A constructor that initializes a `selector` property.
        console.log("CSS selector locators are used")
    }
    click():void{ // A `click()` method that prints a console message simulating a click. 
        console.log("Click on the dropdown")
    }
    focus():void{ // A `focus()` method that prints a console message simulating focusing on the component.
        console.log("Focussing on the component")
    }
}
class Button extends WebComponent{ // Implement the `Button` Derived Class
    click():void{
        console.log("Click on the button to navigate")// Override the `click()` method to include an additional message specific to buttons. 
        //super.click()
    }
}
class TextInput extends WebComponent{ // Implement the `TextInput` Derived Class
    value:string="" // A property `value` initialized to an empty string.
    enterText(text:string):void{ // An `enterText(text: string)` method that sets `value` and prints a message simulating text entry.
        this.value= text
        console.log("Text entered is ",this.value)
    }
}
function testComponents(){ //Define a function testComponents to demonstrate the usage of the classes
    const button = new Button("#loginButton"); //Instantiate the `Button` and `TextInput` classes with example selectors.
    const textInput = new TextInput("#username");
    button.click(); //Use the instances to simulate clicking the button and entering text into the text input.
    textInput.enterText("SairigapuMadhusree");
}
testComponents()