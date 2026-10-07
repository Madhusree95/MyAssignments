interface PageRules{ //Create an interface named
//unimplemented method
verifyPage(): void //Add the following method signature:
}

abstract class BasePage1{ //Create an abstract class named
    waitForPageLoad(){
        console.log("Waiting for page to load") //implemented methods
    }
    getPageTitle(){
        console.log("Getting page title")  //implemented methods
    }
}

class LoginPage1 extends BasePage1 implements PageRules{ //Create a class named
    verifyPage(){
    console.log("Login Page Verified")
    }
    //Add Login Specific Methods
    enterUsername(){ 
        console.log("Entering Username");
        
    }
    enterPassword(){
        console.log("Entering Password");
    }
    clickLogin(){
        console.log("Clicking on login");
    }
}

class ProductPage1 extends BasePage1 implements PageRules{ //Create a class named
    verifyPage(){
    console.log("Product Page Verified")
    }
    //Add Product Specific Methods
    searchProduct(){
        console.log("Searching for a product");   
    }
    addToCart(){
        console.log("Adding product to Cart")
    }
}

let lop=new LoginPage1
lop.waitForPageLoad()
lop.verifyPage() 
lop.enterUsername()
lop.enterPassword()
lop.clickLogin()
lop.getPageTitle()