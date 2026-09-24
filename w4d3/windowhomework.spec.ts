import {test,expect} from "@playwright/test"
test("window handling merge leads", async ({page,context}) => {
    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.getByRole('textbox',{name:'Username'}).fill("demosalesmanager")//username
    await page.locator('label').filter({hasText:"Password"}).fill('crmsfa')//password
    await page.getByRole('button',{name:"Login"}).click()//login button
    await page.getByRole('link').filter({hasText:"CRM/SFA"}).click()//text
    await page.locator("//a[text()='Leads']").click()//Leads
    await page.getByRole('link').filter({hasText:"Merge Leads"}).click()//Merge leads   
    
    //from lead
    let frompagePromise=context.waitForEvent('page')
    await page.locator('[alt="Lookup"]').nth(0).click()//From lead widget
    let childPage1=await frompagePromise;
    await childPage1.waitForLoadState('domcontentloaded');
    await childPage1.locator('//a[text()="10028"]').click()//first lead id
    
    //To lead 
    let topagePromise=context.waitForEvent('page')
    await page.locator('[alt="Lookup"]').nth(1).click()//To lead widget
    let childPage2=await topagePromise;
    await childPage2.waitForLoadState('domcontentloaded');
    await childPage2.locator('//a[text()="10029"]').click()//second lead id
    
    await page.locator('[class="buttonDangerous"]').click()//merge
    page.on('dialog',async(alert)=>{
    let alertType=alert.type()
    console.log(alertType);
    let alertmessage=alert.message()
    console.log(alertmessage)
    if (alertType==="confirm")//if confirm give ok
        {
    await alert.accept("ok")
        }
    await page.waitForLoadState('domcontentloaded')
    await page.waitForTimeout(8000);
    await expect(page).toHaveTitle('View Lead | opentaps CRM')
})}
)
