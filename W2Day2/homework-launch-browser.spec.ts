import {test, expect} from "@playwright/test"
test('launch redbus',async ({page})=>{
    await page.goto( "https://www.redbus.in" );
    console.log(await page.title());
    console.log(await page.url());
})
test('launch flipkart',async ({page})=>{
    await page.goto( "https://www.flipkart.com" );
    console.log(await page.title());
    console.log(await page.url());
});

