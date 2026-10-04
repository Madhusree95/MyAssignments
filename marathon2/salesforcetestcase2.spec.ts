import {test,expect} from "@playwright/test"
//test('auth file to skip the login', async ({page}) => {
/* await page.goto('https://login.salesforce.com/')
//await page.goto(process.env.url as string)
await page.locator('#username').fill('sairigapumadhusree9295.d79773078539@agentforce.com')
await page.locator('#Login').click()

await page.locator('#password').fill('Dhruv@14062025')
await page.locator('#Login').click()
await page.waitForTimeout(15000)
await page.context().storageState({path:'Data/sflogin.json'})  */ 
test.use(
    {
       storageState:'Data/sflogin.json' 
    }
) 
test('auth file to skip the login', async ({page}) => {
//await page.goto("https://login.salesforce.com/")
await page.goto("https://orgfarm-2a46b21ad5-dev-ed.develop.my.salesforce-setup.com/lightning/setup/SetupOneHome/home")
await page.waitForLoadState('domcontentloaded')
//console.log(await page.title());
//await page.locator(".slds-icon-waffle").click()//Toggler
await page.locator("//button[@title='App Launcher']").click()//app launcher
await page.waitForLoadState('domcontentloaded')
//await page.locator("//button[@aria-label='View All Applications']").click()//viewAll
await page.getByRole('button', {name: 'View All Applications'}).click();//viewall
await page.getByPlaceholder("Search apps or items...").fill("Marketing CRM Classic")//search for marketing
await page.locator('//mark[text()="Marketing CRM Classic"]').click()//click on marketing crm classic
//await page.locator('//span[text()="Leads"]').click()
await page.getByRole('button',{name:'Leads List'}).click()//leads list
await page.getByRole('menuitem',{name:'New Lead'}).click()//new lead
await page.getByRole('combobox',{name:'Salutation' }).click()//salutation
await page.getByText('Mrs.').click();
await page.getByRole('textbox',{name:'First Name'}).fill('Sairigapu')//fill first name
await page.getByRole('textbox',{name:'Last Name'}).fill('Madhusree')//fill last name
await page.getByRole('textbox',{name:'Company'}).fill('TestLeaf')//fill company name
await page.getByRole('button', {name:'Save',exact:true}).click()//save
//const verifylead=page.locator('div').filter({hasText:"Mrs. Madhusree sairigapu"})
//await expect(verifylead).toContainText("Mrs. Madhusree sairigapu");
//await expect(page.getByRole('dialog')).toContainText("Lead 'Mrs. Madhusree sairigapu' was created")
//await expect(page.locator('[id="toastDescription1385:0"]')).toContainText('Lead "Mrs. Sairigapu Madhusree" was created.');


await page.getByRole('button',{name:'Show more actions'}).click();//Show more actions
await page.getByRole('menuitem',{name:'Convert'}).click();//convert
await page.waitForLoadState('domcontentloaded')
await page.getByText('Create New Opportunity').click();//create new opportunity
await page.getByRole('textbox',{name:'Opportunity Name'}).fill('TestLeaf-Madhusree')//fill name
await page.getByRole('button',{name:'Convert',exact:true}).click()//convert success
//await expect(page.getByRole('dialog')).toContainText('Your lead has been converted');
await page.getByRole('button', {name:'Go to Leads'}).click();//go to leads
await page.getByRole('link',{name:'Opportunities'}).click();//opportunities
await page.getByRole('searchbox',{name:'Search this list...'}).fill('TestLeaf-Madhusree');//fill lead name
await page.getByRole('searchbox',{name:'Search this list...'}).press('Enter');//click enter
//await expect(page.locator('grid')).toContainText('TestLeaf-Madhusree');

})
