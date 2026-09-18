import {test} from "@playwright/test"
test.use(
    {
       storageState:'Data/leaftapslogin.json' 
    }
)

test('auth file to skip the login', async ({page}) => {
await page.goto("https://leaftaps.com/opentaps/control/login")
await page.waitForLoadState('domcontentloaded')
console.log(await page.title());
})