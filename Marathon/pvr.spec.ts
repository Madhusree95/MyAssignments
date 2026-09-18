import {test,expect} from "@playwright/test"
test ('pvr login', async({page})=>{
    await page.goto ("https://www.pvrcinemas.com/")//url
    await page.getByRole('combobox',{name:'Cities'}).click();//cities
    await page.locator('[class="cities-overlay cities-active"]')
    //await page.getByText('Bengaluru', { exact: true }).click();
    await page.getByRole('heading',{name:'Bengaluru'}).click();
    await page.getByText('Cinema',{exact:true}).click();//cinema
    await page.locator('span').filter({hasText:'Select Cinema'}).click();//click on cinema
    await page.getByText('INOX Lido Mall, Ulsoor').click();//location
    await page.getByText('Today, 18 Sep').click();//date
    await page.locator('span').filter({hasText:'Select Movie'}).click();//click on movie
    await page.getByRole('listbox').getByText('CITY LIGHTS').click();//movie selection
    await page.getByText('03:20 PM').click();//time
    await page.getByRole('button',{ name:"Submit"}).click();//Book
    await page.getByRole('button',{ name:"Accept"}).click();//Accept
    await page.getByRole('button',{ name:"Accept"}).click();//Accept terms and conditions
    await page.getByText('4',{exact:true}).nth(5).click();//select seat
    const bookingSummary=page.locator('div').filter({hasText:"Booking Summary"}).nth(5)
    await expect(bookingSummary).toBeVisible();//Verify booking summary
    await expect(page.getByText('Seat Info')).toBeVisible();//Verify seat
    await expect(page.getByText('F4')).toBeVisible();
    await expect(page.getByText('Grand Total 351.92')).toBeVisible();//Total verification
}
)