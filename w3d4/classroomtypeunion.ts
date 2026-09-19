type PaymentMethod="UPI" | "CreditCard" | "PayPal"

function makePayment(paymentName:PaymentMethod){

if (paymentName==="UPI"){

    console.log("UPI mode of payment",paymentName);
    
}else if(paymentName==="CreditCard"){
 
    console.log("Creditcard mode of payment",paymentName);

}else{

    console.log("invalid mode of payment",paymentName);
}

}

makePayment("PayPal")
makePayment("CreditCard")
makePayment("UPI")

