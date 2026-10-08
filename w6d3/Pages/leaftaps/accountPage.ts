import {HomePage} from './home';
export class ClickAccountPage extends HomePage{
async clickAccounts(){
   await this.page.locator('//a[text()="Accounts"]').click()
}
}


