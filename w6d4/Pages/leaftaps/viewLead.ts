import {expect} from "@playwright/test"
//import { CreateLead } from "./createLead";
import { PWWrapper } from "../helper/playwrightWrapper";


export class ViewLead extends PWWrapper{

async verifyLead(expectedfirstName:string){


let firstName=await this.page.locator('[id="viewLead_firstName_sp"]').innerText()
console.log(firstName)

console.log(expectedfirstName);



//Non-retry assertion

//expect(firstName).toBe('Naveen')
expect(firstName).toBe(expectedfirstName)


//retry assertion


//exact match
//await expect(this.page.locator('[id="viewLead_firstName_sp"]')).toHaveText('Naveen')
await expect(this.page.locator('[id="viewLead_firstName_sp"]')).toHaveText(expectedfirstName)

//partial match
//await expect(this.page.locator('[id="viewLead_firstName_sp"]')).toContainText('Naveen')
await expect(this.page.locator('[id="viewLead_firstName_sp"]')).toContainText(expectedfirstName)

}


}