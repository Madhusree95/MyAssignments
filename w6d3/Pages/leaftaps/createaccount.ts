import { ClickAccountPage } from "./accountPage";
export class CreateAccountPage extends ClickAccountPage{
async createAccount(){
   await this.page.locator('//a[text()="Create Account"]').click()
}
async enterAccountMandatoryFields(){

await this.page.locator('[id="accountName"]').fill('Madhu')

}

async clickonCreateAccountSubmitButton(){

await this.page.locator('.smallSubmit').click()
}
}




