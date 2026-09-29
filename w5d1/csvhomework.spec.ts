import {test,expect} from "@playwright/test"
import {parse} from "csv-parse/sync"//to run multiple data synchronously import parse
import fs from 'fs'//filesync import
import path from 'path'

let data:any[]=parse(fs.readFileSync('utils/loginData.csv','utf-8'),{columns:true,skip_empty_lines:true})//To Read CSV data using fs, path, and csv-parse and Converting CSV records into JavaScript objects
test.describe.serial('run test in serial mode csv', async()=>{//To run multiple data in serial mode
for(let credentials of data){//To iterate the data in csv file
test(`Read data from csv file serial mode ${credentials.testcaseid}`,async ({page}) => {//Giving title according to each test id
    await page.goto("http://leaftaps.com/opentaps/control/main")//Navigate to url
    await page.getByRole('textbox',{name:'Username'}).fill(credentials.username)//fill username 
    await page.locator('#password').fill(credentials.password)//fill password
    await page.getByRole('button',{name:"Login"}).click()//click login
    await expect(page).toHaveTitle(/Leaftaps/); //verify title
    await expect(page.getByText("CRM/SFA")).toBeVisible();//verify crm/sfa text
})
}
})