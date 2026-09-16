import {test,expect} from "@playwright/test"
test ('leafground login', async({page})=>{
    //Navigate to url
    await page.goto ("https://leafground.com/input.xhtml")
    //Disabled textbox
    const textboxdisabled=page.locator('//div[@class="col-12"]/input[@placeholder="Disabled"]')
    expect(textboxdisabled).toBeDisabled()
    //Edit textbox
    const editabletextbox=page.locator('//div[@class="col-12"]/input[@id="j_idt88:name"]')
    expect(editabletextbox).toBeEditable()
    editabletextbox.fill("Madhusree")
//await expect (page.locator('//div[@class="col-12"]/input[@id="j_idt88:name"]').toBeEditable()).fill("Madhusree")
    //soft assertion
    const softassertion=page.locator('//div[@class="col-12"]/input[@value="Chennai"]')
    expect.soft(softassertion).toBeDisabled()
    console.log("Soft assertion check")
    //fill data
    const enterdata=page.locator('//div[@class="col-12"]/input[@value="Chennai"]')
    enterdata.fill("Hyderabad")
}
)