import {test,expect} from "@playwright/test"
test("frames and alerts", async ({page}) => {
page.on('dialog',async (alert) => {
let alertType=alert.type()
console.log(alertType);
if (alertType==="confirm"){//if confirm alert
await alert.accept("ok")//accept alert 
}
})
await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')
let tryit=page.frameLocator('[id="iframeResult"]')
await tryit.getByRole('button',{name:"Try it"}).click();
const verify = tryit.locator('[id="demo"]')
let afterclick=await verify.innerText()//message after click action
console.log(afterclick);
await expect(verify).toHaveText('You pressed OK!');
console.log("verified")
})