import {test} from "@playwright/test"
test ('salesforce login', async({page})=>{
    await page.goto ("https://login.salesforce.com/?locale=in")
    await page.locator("[id='username']").fill("dilipkumar.rajendran@testleaf.com")
    //page.locator(".button.r4.wide.primary").click()
    await page.locator("[id='Login']").click()
    await page.locator("[id='password']").fill("TestLeaf@2025")
    //page.locator(".button.r4.wide.primary").click()
    await page.locator("[id='Login']").click()
    console.log(await page.title())
    console.log(page.url())
}
)