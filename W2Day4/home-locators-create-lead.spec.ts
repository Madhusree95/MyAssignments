// Create Lead
import {test} from "@playwright/test"
test ('salesforce login', async({page})=>{
    await page.goto ("https://login.salesforce.com/?locale=in")
    await page.locator("[id='username']").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("[id='Login']").click()
    await page.locator("[id='password']").fill("TestLeaf@2025")
    await page.locator("[id='Login']").click()
    await page.locator(".slds-icon-waffle").click()//Toggler
    await page.locator("//button[@aria-label='View All Applications']").click()//viewAll
    await page.locator("//p[text()='Sales']").click()//Sales
    await page.locator("[class='slds-truncate']").nth(3).click()//Leads
    await page.locator("[title='New']").nth(1).click()//New
    await page.locator("[name='salutation']").click()//Salutation dropdown
    await page.locator("[name='lastName']").fill("Madhu")//Lastname
    await page.locator("[name='Company']").fill("TechMahindra")//Company Name
    await page.locator("[name='SaveEdit']").click()//save
    await expect(page).toHaveTitle("Sairigapu Madhu | Testleaf", { timeout: 10000 })//Verify
    //await page.locator("[name='primaryField']")
    //await page.locator("[aria-label="Lead Status"]").nth(1).click()

}
)  

//Edit lead
import {test} from "@playwright/test"
test ('leaftaps login', async({page})=>{
    await page.goto ("http://leaftaps.com/opentaps/control/main")
    await page.locator("[id='username']").fill("democsr2")//Username
    await page.locator("[id='password']").fill("crmsfa")//Password
    await page.locator('.decorativeSubmit').click()//Login
    await page.locator("text=CRM/SFA").click()//CRM/SFA
    await page.locator("//a[text()='Leads']").click()//Leads
    await page.locator("text=Create Lead").click()//Create Lead
    await page.locator("[id='createLeadForm_companyName']").fill("Testleaf")//Company Name
    await page.locator("[id='createLeadForm_firstName']").fill("Sairigapu")//First Name
    await page.locator("[id='createLeadForm_lastName']").fill("Madhu")//Last Name
    await page.locator('.smallSubmit').click()
    await page.locator('.subMenuButton').nth(2).click()//Edit
    await page.locator("//input[@id='updateLeadForm_companyName']").fill("TechMahindra")//Changes Company Name
    await page.locator("[value='Update']").click()//updated
}
) 



 

//Create individuals
import {test} from "@playwright/test"
test ('salesforce login', async({page})=>{
    await page.goto ("https://login.salesforce.com/?locale=in")
    await page.locator("[id='username']").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("[id='Login']").click()
    await page.locator("[id='password']").fill("TestLeaf@2025")
    await page.locator("[id='Login']").click()
    await page.locator(".slds-icon-waffle").click()//Toggler
    await page.locator("//button[@aria-label='View All Applications']").click()//viewAll
    await page.locator("//p[text()='Individuals']").click()//Individuals
    await page.locator("//span[text()='Individuals']").nth(0).click()//Individuals Tab
    //await page.locator("[//input[@class='slds-input']").nth(3).fill("Individuals")
    await page.locator("[class='slds-icon slds-icon-text-default slds-icon_xx-small']").nth(13).click()//individuals dropdown
    await page.locator("//span[text()='New Individual']").click()//New Individual
    await page.locator("[placeholder='Last Name']").fill("Madhu")//Lastname
    await page.locator("[class=' label bBody']").nth(2).click()//save
    await page.locator("//span[text()='Madhu']").nth(1)
}
)
 


//Edit Individuals
import {test} from "@playwright/test"
test ('salesforce login', async({page})=>{
    await page.goto ("https://login.salesforce.com/?locale=in")
    await page.locator("[id='username']").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("[id='Login']").click()
    await page.locator("[id='password']").fill("TestLeaf@2025")
    await page.locator("[id='Login']").click()
    await page.locator(".slds-icon-waffle").click()//Toggler
    await page.locator("//button[@aria-label='View All Applications']").click()//viewAll
    await page.locator("//p[text()='Individuals']").click()//Individuals
    await page.locator("//span[text()='Individuals']").nth(0).click()//Individuals Tab
    await page.locator("[name='Individual-search-input']").fill("Madhu")//Search for last name
    await page.locator("//a[@title='Show 2 more actions']").click()//dropdown
    await page.locator("//a[@title='Edit']").click()//Edit
    await page.locator("[title='Mr.']").click()//Sautation
    await page.locator("//input[@placeholder='First Name']").fill("Sairigapu")//FirstName
    await page.locator("//span[text()='Save']").click()//Save
    await expect(page).toHaveTitle("Sairigapu Madhu | Salesforce", { timeout: 10000 })//Verify

}
) 

