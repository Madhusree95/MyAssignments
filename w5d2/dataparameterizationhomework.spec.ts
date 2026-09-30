import {test} from "@playwright/test"
import dotenv from 'dotenv'
import credentials from "../../../../Data/credentials.json"
import path from 'path'
//let filename=process.env.envfile || "prod" || 'qa' //to toggle between environments
dotenv.config({path:`Data/prod.env`})//specify path
let URL=process.env.lt_url as string
let Username=process.env.lt_username!//type assertion
let Password=<string>process.env.lt_password


test ('leaftaps login and creating modules', async({page})=>{
    //importing data from prod.env file
    await page.goto (URL)
    await page.locator("[id='username']").fill(Username)//Username
    await page.locator("[id='password']").fill(Password)//Password
    await page.locator('.decorativeSubmit').click()//Login
    await page.locator("text=CRM/SFA").click()//CRM/SFA
    await page.locator("//a[text()='Leads']").click()//Leads
    await page.locator('//a[contains(text(),"Create Lead")]').click()//Create Lead

    //Using credentials.json file, reading the data
    await page.locator("[id='createLeadForm_companyName']").fill(credentials.Companyname)//Company Name
    await page.locator("[id='createLeadForm_firstName']").fill(credentials.Firstname)//First Name
    await page.locator("[id='createLeadForm_lastName']").fill(credentials.Lastname)//Last Name

    const sourcedropdown=page.locator('[name="dataSourceId"]')
    await sourcedropdown.selectOption({label:"Direct Mail"})//Select Direct Mail from the Source dropdown using label

    const mcampaign=page.locator('[name="marketingCampaignId"]')
    await mcampaign.selectOption({value:"DEMO_MKTG_CAMP"})//Select Demo Marketing Campaign from the Marketing Campaign dropdown using value

    const mcampaignlist:any=await page.locator('//select[@id="createLeadForm_marketingCampaignId"]//option').allInnerTexts()
    console.log(await mcampaignlist)//count and marketing campaign list
    console.log(`Total number of campaigns: ${mcampaignlist.length}`);

    const industry=page.locator('[name="industryEnumId"]')// Select General Services from the Industry dropdown using index
    await industry.selectOption({index:6})

    const currency=page.locator('[name="currencyUomId"]')//Select INR from the Preferred Currency dropdown
    await currency.selectOption({value:"INR"})

    const country=page.locator('[name="generalCountryGeoId"]')//Select India from the Country dropdown
    await country.selectOption({value:"IND"})

    const state=page.locator('[name="generalStateProvinceGeoId"]')//Select any state from the State dropdown 
    await state.selectOption({value:"NY"})

    const statelist:any=await page.locator('//select[@id="createLeadForm_generalStateProvinceGeoId"]//option').allInnerTexts()
    console.log(await statelist)//count and state list
    console.log(`Total number of states: ${statelist.length}`);

    await page.locator('.smallSubmit').click()//Click Create Lead

})