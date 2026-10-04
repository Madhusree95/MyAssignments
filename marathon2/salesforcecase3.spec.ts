import {test,expect} from "@playwright/test"
//test('skip the login', async ({page}) => {
/* await page.goto('https://login.salesforce.com/')
//await page.goto(process.env.url as string)
await page.locator('#username').fill('sairigapumadhusree9295.d79773078539@agentforce.com')
await page.locator('#Login').click()

await page.locator('#password').fill('Dhruv@14062025')
await page.locator('#Login').click()
await page.waitForTimeout(15000)
await page.context().storageState({path:'Data/sflogin.json'}) */ 
test.use(
    {
       storageState:'Data/sflogin.json' 
    }
) 
test('skip the login', async ({page}) => {
//await page.goto("https://login.salesforce.com/")
await page.goto("https://orgfarm-2a46b21ad5-dev-ed.develop.my.salesforce-setup.com/lightning/setup/SetupOneHome/home")//Launch the browser
await page.waitForLoadState('domcontentloaded')
//console.log(await page.title());
//await page.locator(".slds-icon-waffle").click()//Toggler
await page.locator("//button[@title='App Launcher']").click()//App lauuncher
await page.waitForLoadState('domcontentloaded')
//await page.locator("//button[@aria-label='View All Applications']").click()//viewAll
await page.getByRole('button',{name: 'View All Applications'}).click()//view all
await page.getByRole('combobox',{name: 'Search apps or items...' }).fill('service')//search for service
await page.getByRole('link',{name:'Service',exact:true}).click()//service
await page.getByRole('link',{name:'Cases'}).click()//cases tab
await page.getByRole('button',{name:'New'}).click()//new cases
await page.locator('.slds-input__icon.slds-input__icon_right.slds-icon-utility-search > span > lightning-primitive-icon > .slds-icon').first().click();//drop down of new case contact
await page.getByText('New Contact').click()//new contact
await page.getByRole('combobox',{name:'Salutation'}).click()//salutation
await page.getByText('Mrs.').click()
await page.getByRole('textbox',{name:'First Name'}).fill('Sairigapu')//first name
await page.getByRole('textbox',{name:'Last Name'}).fill('Madhusree')//last name
await page.getByRole('button', { name: 'Save' }).click()//save
//await expect(page.locator('[id="toastDescription1388:0"]')).toContainText('Contact "Mrs. Sairigapu Madhusree" was created.');
//await page.locator('#combobox-input-518').click();
//await page.locator('[class="slds-combobox__input slds-input"]').click()
await page.getByPlaceholder("Search Accounts...").click()//search accounts
//await page.getByRole('combobox', { name: "Account Name" }).click()
 await page.getByText('New Account').click();//new account
//await page.getByRole('option', { name: "Add New Account" }).click()
await page.getByRole('textbox',{name:'Account Name'}).fill('Madhu')//account name
await page.getByRole('textbox',{name:'Account Number' }).fill('1234567890')//account number
await page.getByRole('combobox',{name:'Rating'}).click()//rating
await page.locator('span').filter({hasText:'Hot'}).first().click()//click hot
await page.getByRole('button',{name:'Save'}).click()//click save
//await expect(page.locator('[id="toastDescription1509:0"]')).toContainText('Account "Madhusree" was created.');
await page.getByRole('combobox',{name:'Status'}).click()//change status
await page.getByRole('option',{name:'New'}).click()//new status
await page.getByRole('combobox',{name:'Priority'}).click()//select priority
await page.locator('span').filter({hasText:'High'}).first().click()//select high
await page.getByRole('combobox',{name:'Case Origin'}).click()//select caseorigin
await page.getByText('Email',{exact:true}).click()//Email
await page.getByRole('textbox',{name:'Subject'}).fill("Product Return Request")//subject filling
await page.getByRole('textbox',{name:'Description'}).fill("Requesting a return for a defective product")//description filling
await page.getByRole('button',{name:'Save'}).click()//save
//await expect(page.locator('[id="toastDescription1590:0"]')).toContainText('Case "00001026" was created.');
await page.getByRole('button',{name:'Edit Status'}).click();//Edit status
await page.getByRole('combobox',{name:'Status'}).click();
await page.getByText('Escalated',{exact:true}).click();//Change to Escalated
await page.getByRole('button',{name:'Save'}).click();//Svae the changes
await page.getByTitle('Share an update...').fill('Share an Update input field and click on the Share button');//Sharing an update
await page.getByRole('button',{name:'Share'}).click()//share
  //await expect(page.locator('[id="toastDescription2709:0"]')).toContainText('Your update was shared.');
  await page.locator('a').filter({hasText:'Actions for this Feed Item'}).first().click();//To perform actions on feed
  await page.locator('a').filter({hasText:'Like on Chatter'}).click();//
  //await expect(page.locator('[id="toastDescription2779:0"]')).toContainText('Post was liked.');
  await page.getByRole('link',{name:'Chatter'}).click();//Chatter tab
  const caseid = page.locator('//div[p[normalize-space()="Case Number"]]//lightning-formatted-text');
  const inner = await caseid.innerText();
  console.log(inner);
  await expect(page.getByText(inner)).toBeVisible()
  await expect(page.getByRole('button',{name:'Liked' })).toContainText('Liked')
})




