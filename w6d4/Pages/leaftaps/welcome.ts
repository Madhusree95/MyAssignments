import { PWWrapper } from "../helper/playwrightWrapper";
//import { LoginPage } from "./login";


export class WelcomePage extends PWWrapper {

async clickonCRMSFA(){
//await this.page.locator('text=CRM/SFA').click()
await this.click('text=CRM/SFA')

}

async logout(){

//await this.page.locator('.decorativeSubmit').click()
await this.click('.decorativeSubmit')

}



}