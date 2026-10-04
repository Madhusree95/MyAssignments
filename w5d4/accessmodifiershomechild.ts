
import {BankAccount} from "./accessmodifiesershome.js"
class Bankdetails extends BankAccount{ //Create a child class and try to access the properties from the child class

    accBalance()
    {
        console.log(this.balance)
    }

}
let accountbalance = new Bankdetails()
accountbalance.accBalance()
//Typical Banking Use Case
//public-Full Name, General Actions (deposit())
//protected-System Keys (accountNumber), Routing Codes
//private-Raw Financial Data (balance), PIN Numbers