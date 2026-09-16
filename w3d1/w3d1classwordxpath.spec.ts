import {test} from "@playwright/test"
test ('salesforce login', async({page})=>{
    await page.goto ("https://login.salesforce.com/?locale=in")
    await page.locator("//div[@id='username_container']/input[@id='username']").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("//div[@id='usernamegroup']/following-sibling::input").click()
    await page.locator("//div[@id='usernamegroup']/following-sibling::input[@type='password']").fill("TestLeaf@2025")
    await page.locator("//div[@id='usernamegroup']/following-sibling::input[@type='submit']").click()
}
)
