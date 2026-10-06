//Create a class named APIClient and create two methods with the same name passing different input arguments.
class APIClient{
    sendRequest(endpoint:string):void // One version should accept one input argument: a string for the endpoint.
    sendRequest(endpoint:string,requestBody?:string,requestStatus?:boolean):void 
    //Another version of the sendRequest method should accept three input arguments: a string for 
//the endpoint, a string for the requestBody, and a boolean parameter requestStatus to verify 
//whether the request is successful. 
    sendRequest(endpoint:string,requestBody?:string,requestStatus?:boolean){ //Create a method to demonstrate the usage of the overloaded sendRequest method
        if(requestBody){
            console.log("requestBody is not implemented", requestBody)
        }
        else if(requestStatus){
            console.log("requeststatus is not implemented",requestStatus)
        }
        else{
            console.log("endpoint is browser", endpoint)
        }
    }
}
// Create an object of the APIClient class.  
let apic=new APIClient
// Call both versions of the sendRequest method on the APIClient object with different sets of input arguments to showcase method overloading
apic.sendRequest("mozilla")
apic.sendRequest("mozilla","Madhu",true)
