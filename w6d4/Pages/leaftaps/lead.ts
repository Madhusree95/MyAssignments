import { PWWrapper } from "../helper/playwrightWrapper";
//import { HomePage } from "./home";


export class LeadPage extends PWWrapper {


async clickonCreateLeadButton(){

//await this.page.locator('//a[text()="Create Lead"]').click()
await this.click('//a[text()="Create Lead"]')

}

}