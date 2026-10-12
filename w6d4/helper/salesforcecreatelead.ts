import {test} from  '../../PW_SEP_WD_POM/helper/customfixture'
import  dotenv from 'dotenv'
import data from '../Data/sflogin.json'
//use the env file data
//config env file
dotenv.config({path:'Data/qa.env'})
const credentialData = require('../../Data/sflogin.json');
test('Lead Creation in Salesforce using POM HI',async({
    loginFix,
    homeFix,
    leadFix
    })=>{
    await loginFix.loadSfUrl(process.env.sf_url as string)
    //reading data from json file
    await loginFix.loginCredentials(credentialData.username,credentialData.password)
    await loginFix.clickLogin()
    await homeFix.viewAppLauncher()
    await leadFix.clickNew()
    let fName = await leadFix.newLead()
    await leadFix.saveLead()
    console.log('Test steps completed');
    await leadFix.verifyLead(fName)
})                             