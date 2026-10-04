import {test,expect} from "@playwright/test"
/* test('auth file to skip the salesforcelogin', async ({page}) => {
await page.goto('https://login.salesforce.com/')
//await page.goto(process.env.url as string)
await page.locator('#username').fill('sairigapumadhusree9295.d79773078539@agentforce.com')
await page.locator('#Login').click()

await page.locator('#password').fill('Dhruv@14062025')
await page.locator('#Login').click()
await page.waitForTimeout(15000)
await page.context().storageState({path:'Data/sf-storage.json'})   */

test.use(
    {
       storageState:'Data/sf-storage.json' 
    }
)  

test.describe('LeafTaps Tests Suite', () => {
test.describe.configure({mode:"parallel",retries:1})

    test('Reuse session and verify homepage',{
    annotation: {
    type: 'Requirement',
    description: 'user story id: 1',
    }
    }, async({page})=>{
    await page.goto('https://orgfarm-e0a099853d-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome')
    await expect(page).toHaveURL(/salesforce/);
    test.slow()
    await page.goto('https://login.salesforce.com/')
    await page.waitForLoadState('domcontentloaded')
    console.log("Navigated")
    })
    test.fail('Test_Fail', async ({page})=>{
        await page.goto('https://login.salesforce.com/')
        throw new Error('Invalid session')
    
    })
    
    })
    test ('leaftaps login', async({page})=>{
    await page.goto ("http://leaftaps.com/opentaps/control/main")
    await page.locator("[id='username']").fill("DemoSalesManager")//Username
    await page.locator("[id='password']").fill("crmsfa")
    await page.locator('.decorativeSubmit').click()
    await expect(page.locator('a:has-text("CRM/SFA")')).toBeVisible();
    })

    
    test.fail('Invalid login', async({page})=>{
    await page.goto ("http://leaftaps.com/opentaps/control/main")
    await page.locator("[id='username']").fill("DemoSalesManager")//Username
    await page.locator("[id='password']").fill("crmsa")//Password
    
    })
    test.fixme('Incomplete login', async({page})=>{
    console.log("Login not clicked")
    })
    test.skip('optional', async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/main')
    console.log("skip the test");
    
    })


 