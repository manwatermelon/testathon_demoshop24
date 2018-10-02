import { Selector } from 'testcafe';

export default class RegistrationPage {
    constructor () {
        this.nameInput = Selector('#input-firstname');
        this.lastNameInput = Selector('#input-lastname');
        this.mailInput = Selector('#input-email');
        this.telephoneInput = Selector('#input-telephone');
        this.passwordInput = Selector('#input-password');
        this.passwordConfirmationInput = Selector('#input-confirm');
        this.confirmCheckbox = Selector('*').withAttribute('name', 'agree');
        this.continueButton = Selector('input[type=submit]').filter(node => node.value = "Continue");
    }
}