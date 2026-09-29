import {test,expect} from "@playwright/test"
import {parse} from "csv-parse/sync"//to run multiple data synchronously import parse
import fs from 'fs'//filesync import
import path from 'path'

let info:any[]=parse(fs.readFileSync('Data/csvlogin.csv','utf-8'),{columns:true,skip_empty_lines:true})//To Read CSV data using fs, path, and csv-parse and Converting CSV records into JavaScript objects
test.describe.parallel('run test in parallel mode', async()=>{//To run multiple data in parallel mode
for(let logincred of info){//To iterate the data in csv file
test(`learn to read data from csv file ${logincred.tcid}`,async ({page}) => {//Giving title according to each test id
    await page.goto("http://leaftaps.com/opentaps/control/main")//Navigate to url
    await page.getByRole('textbox',{name:'Username'}).fill(logincred.username)//Fill username
    await page.locator('label').filter({hasText:"Password"}).fill(logincred.password)//Fill password
    await page.getByRole('button',{name:"Login"}).click()//Click on Login
    expect (page.title)//to verify title
})
}
})