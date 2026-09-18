function fibonacci(n){
    let a=0;
    let b=1;
    if (n<0) {
    console.log("Fibonacci cannot be computed for negative numbers")
    return;
    }
    for(let c=0;c<=n;)// while(let c<=x)
        {
        c=a+b;
        console.log(c)
        a=b;
        b=c;
    }
}
fibonacci(100)
fibonacci(0)
fibonacci(-100)