import {Page} from "@playwright/test"

export class LoginPage {
    page: Page
    constructor(newpage: Page) {
        this.page = newpage
    }

    async loadURL(url: string) {
        await this.page.goto(url)
    }
    async loginDetails(username: string, password: string) {
        await this.page.locator('[id="username"]').fill(username)
        await this.clickLogin()
        await this.page.locator('[id="password"]').fill(password)
        await this.clickLogin()

    }
    async clickLogin() {
        await this.page.locator('[id="Login"]').click()
    }
}
