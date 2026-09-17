import {test,expect} from "@playwright/test"
test ('leaftaps login', async({page})=>{
    await page.goto ("http://leaftaps.com/opentaps/control/main")
    //await expect page.getByAltText(img src="/opentaps_images/opentaps_logo.png").toBeVisible()
    await page.getByRole('textbox',{name:'Username'}).fill("Demosalesmanager")//Username
    await page.locator('label').filter({hasText:"Password"}).fill('crmsfa')//password
    await page.getByRole('button',{name:"Login"}).click()//login
    await page.getByRole('link').filter({hasText:"CRM/SFA"}).click()//crmsfa
    await page.locator('a').filter({hasText:"Leads"}).click()//leads
    //await page.getByText("Leads",{exact:true}).nth(2).click()
    await page.getByRole('link',{name:"Create Lead"}).click()//create lead
    await page.waitForTimeout(2000)
    await page.locator('id=createLeadForm_companyName').fill('TestLeaf');//company name
    await page.locator('id=createLeadForm_firstName').fill('Sairigapu');//first name
   // await page.getByLabel('First name').fill('Sairigapu');
    await page.locator('id=createLeadForm_lastName').fill('Madhusree');//last name
    await page.locator('id=createLeadForm_personalTitle').fill('Mrs');//salutation
    await page.locator('id=createLeadForm_generalProfTitle').fill('SeniorsoftwareEngineer');//title
    await page.locator('id=createLeadForm_annualRevenue').fill('1500000');//annual package
    await page.locator('id=createLeadForm_departmentName').fill('WifiQA');//field
    await page.locator('id=createLeadForm_primaryPhoneNumber').fill('9876543210');//phone number
    //await page.getByRole('button',{name:"Create Lead"}).click()
    //await page.getByText('Create Lead',{exact:true}).nth(5).click()
     await page.locator('.smallSubmit').click()
})