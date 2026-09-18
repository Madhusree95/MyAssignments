import {test} from "@playwright/test"
test ('authfileleaftaps login', async({page})=>{
    await page.goto ("http://leaftaps.com/opentaps/control/main")
    await page.locator("[id='username']").fill("democsr2")//Username
    await page.locator("[id='password']").fill("crmsfa")//Password
    await page.locator('.decorativeSubmit').click()//Login
    await page.waitForTimeout(8000)
    await page.context().storageState({path:'Data/leaftapslogin.json'})
}
)