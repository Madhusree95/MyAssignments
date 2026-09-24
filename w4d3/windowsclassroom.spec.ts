import {test} from "@playwright/test"
test("window handling", async ({page,context}) => {
await page.goto('https://www.leafground.com/window.xhtml')
let pagePromise=context.waitForEvent('page')
await page.locator('(//button[@id="j_idt88:new"])').click()
let childPage=await pagePromise;
await childPage.waitForLoadState('domcontentloaded');
let childTitle=await childPage.title()
console.log(childTitle);
await childPage.locator('(//input[@id="email"])').fill("madhusree9295@gmail.com")
await childPage.locator('(//textarea[@id="message"])').fill("Testleaf")
 let pageTitle=await page.title()
console.log(pageTitle);
await page.bringToFront()
})