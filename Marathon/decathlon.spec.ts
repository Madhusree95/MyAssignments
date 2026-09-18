import {test,expect} from "@playwright/test"
test ('Decathlon login', async({page})=>{
    await page.goto ("https://www.decathlon.in/")
    await expect(page.locator('[data-test-id="header-desktop:logo-link"]')).toBeVisible();//verifying the page
    await page.locator('[data-test-id="header-desktop:container"]').click();
    const searchBar=page.getByPlaceholder('Search for 60+ sports and 6,000+ products')
    await expect(searchBar).toBeVisible();
    await page.getByPlaceholder('Search for 60+ sports and 6,000+ products').fill('Shoes')//Search bar
    await searchBar.press('Enter');
    //await expect page.locator('heading').filter({hasText:"Shoes"}).toBeVisible()//Print page title
    const pageTitle = await page.title();
    console.log(`The current page title is: ${pageTitle}`);//printing page title
    await expect(page).toHaveTitle('Search | Shoes');//Verify the page title is displayed as "Search | shoes"
    const sportCategory=page.locator('[data-test-id="filter-sidebar-desktop:container-13"]')
    await expect(sportCategory).toBeVisible();
    await page.locator('[data-test-id="filter-sidebar-desktop:container-13"]').getByRole('button', { name: 'Sport' }).click();
    //await page.getByRole('button', { name: 'Sport' }).click();
    //await page.locator('[data-test-id="filter-checkbox-sport_pratice_en-Running"]').check();//checking sport category
    await page.getByRole('button', { name: 'Gender' }).click();
    await page.locator('[data-test-id="filter-checkbox-gender_id_en-MEN"]').check();//checking gender
    await page.getByRole('button', { name: 'Size' }).click();
    await page.locator('[data-test-id="filter-checkbox-indian_size-10.5"]').check();//checking size
    await page.locator('[data-test-id="sort-bar-desktop:dropdown-button"]').click();//most relevent
    //await expect page.locator("text=Price(low → high)").click()
    await page.locator('[data-test-id="sort-option-dsi_pim_migration_price_asc"]').click();//price low to high
    await page.goto('https://www.decathlon.in/search?query=Shoes&inStock=1&gender_id_en=MEN&indian_size=10.5&sport_pratice_en=Running');
    await page.getByRole('link', { name: 'Decathlon Men Running Superior Grip Cushion Shoes, Jogflow 100 - Black' }).click();
   // await page.locator('alt: "Men Running Lightweight Cushion Shoes, Jogflow 100.1 - Grey/Orange').click()//first product
    //await page.locator()
    await page.locator('[data-test-id="pdp-size-option-button-10.5"]').click();
    await page.locator('[data-test-id="pdp:add-to-cart-button"]').click();
    await page.getByRole('button', { name: 'Close', exact: true }).click();
    await page.locator('[data-test-id="header-desktop:cart-link"]').click();
    const total=page.getByText('Total₹')
    await expect(total).toBeVisible();
    console.log(`The current total is : ${total}`);
}
)

