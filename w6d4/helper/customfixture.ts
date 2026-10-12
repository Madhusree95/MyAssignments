import {test as base} from '@playwright/test'
import { SfLogin } from '../Pages/salesforce/login'
import { SfHome } from '../Pages/salesforce/home'
import { SfLead } from '../Pages/salesforce/lead'
type myFixture = {
    loginFix : SfLogin
    homeFix : SfHome
    leadFix : SfLead
}
export const test = base.extend<myFixture>({
    loginFix: async({page},use)=>{
        let loginObj = new SfLogin(page)
        await use(loginObj)
    },
    homeFix: async({page},use)=>{
        let homeObj = new SfHome(page)
        await use(homeObj)
    },
    leadFix: async({page},use)=>{
        let leadObj = new SfLead(page)
        await use(leadObj)
    }
})