import { Selector } from 'testcafe';

export default class AccountPage {
    constructor() {
        this.myAccountHeader = Selector('#content > h2:nth-child(1)');
        this.myOrdersHeader = Selector('#content > h2:nth-child(3)');
        this.myAffiliateHeader = Selector('#content > h2:nth-child(5)');
        this.myNewsletterHeader = Selector('#content > h2:nth-child(7)');
    }

    isLoaded() {
        if (this.myAccountHeader.isLoaded() &&
            this.myOrdersHeader.isLoaded() &&
            this.myAffiliateHeader.isLoaded() &&
            this.myNewsletterHeader.isLoaded()) {
                return true;
        } else {
            return false;
        }
    }
}