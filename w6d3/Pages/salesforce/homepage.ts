import { LoginPage } from "./loginpage";

export class HomePage extends LoginPage {
    async clickAppLauncher() {
        await this.page.locator("[title='App Launcher']").click()
        await this.page.locator('[aria-label="View All Applications"]').click()
    }

    async clickonLeads() {
        await this.page.locator('[class="slds-input"]').fill('Leads')
        await this.page.locator("//mark[text()='Leads']").click()
    }
}