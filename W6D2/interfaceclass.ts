
interface Payment{
//unimplemented method
pay(amount:number): void
}

class UPI{
 pay(amount:number): void{
    console.log("Payment method used UPI",amount)
 }
}
class CreditCard implements UPI{
 pay(amount:number): void{
    console.log("Payment method used CreditCard", amount)
 }
}
class NetBanking implements CreditCard{
  pay(amount:number): void{
    console.log("Payment method used NetBanking", amount)
}
}
let modeofpay= new UPI
modeofpay.pay(20000)
let creditpay=new CreditCard
creditpay.pay(300)
let netpay=new NetBanking
netpay.pay(4500)
