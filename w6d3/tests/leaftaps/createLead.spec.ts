
import {test} from "@playwright/test"
import { LoginPage } from "../Pages/login"
import { ViewLead } from "../Pages/viewLead"

test('create lead using POM',async ({page}) => {


//object creation for login page

/* let lp=new LoginPage(page)
await lp.loadUrl("https://leaftaps.com/opentaps/control/main")
await lp.loginCredentials("democsr2","crmsfa")
await lp.clickonLogin()
//await lp.closeBrowser() */


//create object for view lead page

let vp=new ViewLead(page)
await vp.loadUrl("https://leaftaps.com/opentaps/control/main")
await vp.loginCredentials("democsr2","crmsfa")
await vp.clickonLogin()
await vp.clickonCRMSFA()
await vp.clickonLeadsButton()
await vp.clickonCreateLeadButton()
await vp.enterManditoryFields()
await vp.clickonCreateLeadSubmitButton()
await vp.verifyLead()

    
})