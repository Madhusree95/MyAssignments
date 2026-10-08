import { expect } from "@playwright/test";
import { HomePage } from "./homepage";

export class LeadPage extends HomePage {
    async clickonNew() {
        await this.page.locator("//button[@name='New']").click()
    }

    async fillMAndatory() {
    await this.page.getByRole('menuitem',{name:'New Lead'}).click()//new lead
    await this.page.getByRole('combobox',{name:'Salutation' }).click()//salutation
    await this.page.getByText('Mrs.').click();
    await this.page.getByRole('textbox',{name:'First Name'}).fill('Sairigapu')//fill first name
    await this.page.getByRole('textbox',{name:'Last Name'}).fill('Madhusree')//fill last name
    await this.page.getByRole('textbox',{name:'Company'}).fill('TestLeaf')//fill company name
    
    }

    async clickOnSave() {
        await this.page.getByRole('button', {name:'Save',exact:true}).click()//save
    }
    async verifyLead() {
        let text = await this.page.locator('lightning-formatted-name[slot="primaryField"]').innerText()
        expect(text).toBe('Mrs. Madhusree')
        await expect(this.page.locator('lightning-formatted-name[slot="primaryField"]')).toContainText('Madhusree')

    }
}