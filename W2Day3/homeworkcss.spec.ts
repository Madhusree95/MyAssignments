import {test} from "@playwright/test"
test ('leaftaps login', async({page})=>{
    await page.goto ("http://leaftaps.com/opentaps/control/main")
    await page.locator("[id='username']").fill("democsr2")
    await page.locator("[id='password']").fill("crmsfa")
    await page.locator('.decorativeSubmit').click()
    await page.locator("text=CRM/SFA").click()
    //await page.locator("text=Leads").click()
    await page.locator("text=Create Lead").click()
    await page.locator("[id='createLeadForm_companyName']").fill("Testleaf")
    await page.locator("[id='createLeadForm_firstName']").fill("Sairigapu")
    await page.locator("[id='createLeadForm_lastName']").fill("Madhu")
    await page.locator("[id='createLeadForm_personalTitle']").fill("Hi Team")
    await page.locator("[id='createLeadForm_generalProfTitle']").fill("Senior Software Engineer")
    await page.locator("[id='createLeadForm_annualRevenue']").fill("15,00000")
    await page.locator("[id='createLeadForm_departmentName']").fill("Wireless technologies")
    let sourcedropdown= await page.locator("[id='createLeadForm_dataSourceId']");
    let options= sourcedropdown.locator('option');
    let optionscount=await options.count();

    for(let i=0;i<optionscount;i++){
        const option = options.nth(i);
        console.log(await option.getAttribute('value'));
    }
    await page.locator("[id='createLeadForm_primaryPhoneNumber']").fill("9876543210")
    await page.locator('.smallSubmit').click()
    //await page.waitForTimeout(20000)
}
)