import { Selector } from 'testcafe';

export default class LoginPage {
    constructor () {
        this.emailInput = Selector('#input-email');
        this.passwordInput = Selector('#input-password');
        this.loginButton = Selector('input[type=submit]').filter(node => node.value = "Login");
    }
}