//function declaration
function userprofile(name){
    console.log("Hello", name)
}
userprofile("vamsi")
setTimeout(userprofile,1000,"Madhu")//using settimeout built in function

//arrow function
let double=((x)=>(2*x))
console.log(double(20)) 

//Anonymous function
setTimeout( ()=> {console.log("This message is delayed by 2 seconds")}, 2000)//settimeout built in with anonymous function


//Call back function
function getUserData(cb) {
setTimeout(() => {
    cb();
}, 3000);
}

function callback(){
    console.log("Call back function")
}
getUserData(callback)


