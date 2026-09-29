import {test} from "@playwright/test"
import data from "../../../Utils/learnjson.json"//path of json file
for(let credentials of data){//to iterate the data in json
test(`learn to read data from JSON file ${credentials.tcid}`,async ({page}) => {//Giving title according to each test id
await page.goto("https://login.salesforce.com")//Navigate to url
await page.locator('[id="username"]').fill(credentials.username)//fill username
await page.locator("[id='Login']").click()// click login
await page.locator("[id='password']").fill(credentials.password)//fill password
await page.locator("[id='Login']").click()//click login
})}


