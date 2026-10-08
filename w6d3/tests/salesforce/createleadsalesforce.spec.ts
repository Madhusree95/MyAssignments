import { test, expect } from "@playwright/test"
import { LeadPage } from "../../Pages/salesforce/leadpage"

test("Create lead in salesforce using POM", async ({ page }) => {
    let cl = new LeadPage(page)
    await cl.loadURL('https://login.salesforce.com/?locale=in')
    await cl.loginDetails('sairigapumadhusree9295.d79773078539@agentforce.com', 'Dhruv@14062025')
    await cl.clickAppLauncher()
    await cl.clickonLeads()
    await cl.clickonNew()
    await cl.fillMAndatory()
    await cl.clickOnSave()
})