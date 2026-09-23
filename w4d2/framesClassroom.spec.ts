//Classroom Activity: Handle the nested frame
//locate the outerframe-> locate the innerframe->locate the element for button->click()


import {test} from "@playwright/test"
test("Nested frames", async ({page}) => {
await page.goto('https://www.leafground.com/frame.xhtml')
let outerpageref=page.frameLocator('[src="page.xhtml"]')
let singleframeRef=outerpageref.frameLocator('[src="framebutton.xhtml"]')
await singleframeRef.locator('#Click').click()
}
)



