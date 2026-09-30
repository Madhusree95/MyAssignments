import {test} from "@playwright/test"
import dotenv from 'dotenv'
let filename=process.env.envfile || "prod" || 'qa' //to toggle between environments
dotenv.config({path:`Data/${filename}.env`})//specify path
let URL=process.env.lf_url as string
let Username=process.env.lf_username as string//type assertion
let Password=process.env.lf_password as string
test('learn to read data from multiple env files', async ({page}) => {
await page.goto(URL)
await page.locator('[id="username"]').fill(Username)//fill username
await page.locator("[id='Login']").click()// click login
await page.locator("[id='password']").fill(Password)//fill password
await page.locator("[id='Login']").click()//click login 
})