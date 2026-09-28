import {test,expect} from "@playwright/test"
test("fileupload input type", async ({page}) => {
    await page.goto("https://www.naukri.com/registration/createAccount")
    await page.locator('[class="textWrap"]').nth(0).click()
    let fileupload=page.locator('(//input[@type="file"])[1]')
    await fileupload.setInputFiles('Data/02_Factorial_Calculation-TypeScript.pdf')

    let fileuploadassertion=await page.locator('//span[text()="02_Factorial_Calculation-TypeScript.pdf"]').innerText()
    console.log(fileuploadassertion);
    await expect(page.locator('//span[text()="02_Factorial_Calculation-TypeScript.pdf"]')).toContainText('02_Factorial_Calculation-TypeScript.pdf')


}
)
