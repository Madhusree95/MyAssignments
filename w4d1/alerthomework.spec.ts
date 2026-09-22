import {test} from "@playwright/test"
test('handle prompt alert',async ({page}) => {
page.once('dialog',async (alert) => {//handle alerts
let alertType=alert.type()
console.log(alertType);
if (alertType==="prompt"){//if prompt give input
await alert.accept("Playwright")//accept alert 
}
})
await page.goto('https://www.leafground.com/alert.xhtml')//go to url
await page.locator('//span[text()="Show"]').nth(4).click() //click on alert type
})