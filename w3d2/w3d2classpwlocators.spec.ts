import {test,expect} from "@playwright/test"
test ('leaftaps login', async({page})=>{
    await page.goto ("http://leaftaps.com/opentaps/control/main")
    //await expect page.getByAltText(img src="/opentaps_images/opentaps_logo.png").toBeVisible()
    await page.getByRole('textbox',{name:'Username'}).fill("democsr2")
    await page.locator('label').filter({hasText:"Password"}).fill('crmsfa')
    await page.getByRole('button',{name:"Login"}).click()
    await page.getByRole('link').filter({hasText:"CRM/SFA"}).click()
    //await page.locator('a').filter({hasText:"Leads"}).click()
})