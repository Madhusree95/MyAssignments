import {test,expect} from "@playwright/test"
import path from 'path'
test("multiple fileupload input type", async ({page}) => {
    await page.goto("https://www.leafground.com/file.xhtml")
    await page.locator('[id="j_idt97:j_idt98_label"]').click()
    let fileupload=page.locator('(//input[@type="file"])').last()
    await fileupload.setInputFiles([path.join(__dirname,'../../../../Data/sample.jpg'),path.join(__dirname,'../../../../Data/sample1.jpeg')])
//span[text()="Upload"]
    //await expect(page.locator("sample.jpg")).toBeVisible();
    //await expect(page.locator("sample1.jpeg")).toBeVisible();
    //console.log("multiple files uploaded")
    let images = await page.locator('div[class="ui-fileupload-filename"]').allInnerTexts()
    await expect(images).toContain('sample.jpg')
    await expect(images).toContain('sample1.jpeg')


}
)
