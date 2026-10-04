export class BankAccount
{
    //Create properties for accountNumber, accountHolder, and balance using different accessmodifiers.
    public accountHolder:string ="Madhusree"
    private accountNumber:number = 109876543210
    protected balance:number = 5000000
//Create methods to deposit and withdraw money
    public deposit()
    {
        console.log("Amount Credited")
    }

    public withdraw()
    {
        console.log ("Amount Debited")
    }

    public get readData()
    {
        return this.accountNumber
    }
}
//Create an object of the class and try to access each property directly from outside the class
let bank = new BankAccount()
console.log(bank.accountHolder)
bank.deposit()
bank.withdraw()
console.log (bank.readData)