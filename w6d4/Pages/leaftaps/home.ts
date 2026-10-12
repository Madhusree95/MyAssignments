import { PWWrapper } from "../helper/playwrightWrapper";
//import { WelcomePage } from "./welcome";

export class HomePage extends PWWrapper{


    async clickonLeadsButton(){

        //await this.page.locator('//a[text()="Leads"]').click()
        await this.click('//a[text()="Leads"]')


    }
}