import { Selector } from 'testcafe';

export default class PageHeader {
    constructor () {
        this.myAccountElement = Selector('#top-links > ul > li.dropdown > a');
        this.registerElement = Selector('#top-links > ul > li.dropdown.open > ul > li:nth-child(1) > a');
        this.loginElement = Selector('#top-links > ul > li.dropdown.open > ul > li:nth-child(2) > a');
        this.editProfileElement = Selector('#content > ul:nth-child(2) > li:nth-child(1) > a');
    }
};
