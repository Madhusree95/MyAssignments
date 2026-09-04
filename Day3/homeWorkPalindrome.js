//Palindrome function without using split
function palindrome(str1){
    let str2=""
    for(let i=(str1.length)-1; i>=0; i--){
        str2=`${str2}${str1.charAt(i)}`
        }
    console.log(str2)//Reverse of a string
    if(str1===str2){
        //console.log("Its a palindrome")
        return true
    }
    else{
        //console.log("not a palindrome")
        return false
    }
}
palindrome("radar")
palindrome("science") 

//Palindrome function using Split
function palindrome1(word1){
    let ar=(word1.split(""));
    let word2=""
    let i=word1.length-1
    while (i>=0) {
        word2=`${word2}${ar[i]}` //Reverse of a string  
        i--;  
    }
    console.log(word2)
    if (word1===word2){
        //console.log("its a palindrome")
        return true
    }
    else{
        //console.log("not a palindrome")
        return false
    }
}
palindrome1("mathematics")
palindrome1("madam")
