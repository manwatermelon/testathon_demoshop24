import { user_NOK } from "./mocks/user.mocks";
import { user_OK } from "./mocks/user.mocks";
import RegistrationPage from './pages/registrationPage';
import PageHeader from "./pages/pageHeader";
import { Selector } from 'testcafe';

const pageHeader = new PageHeader();
const page = new RegistrationPage();

fixture`User Registration`
    .page`http://demoshop24.com/`
    .beforeEach(
        async t => {
            await t
                .click(pageHeader.myAccountElement)
                .click(pageHeader.registerElement);
        });

test('should have mandatory fields', async t => {
    await t
        .click(page.continueButton);

    await t.expect(Selector('.text-danger').count > 0);
});

test('should validate password equality', async t => {
    await t
        .typeText(page.nameInput, user_OK.firstName)
        .typeText(page.lastNameInput, user_OK.secondName)
        .typeText(page.mailInput, user_OK.email)
        .typeText(page.telephoneInput, user_OK.phoneNumber)
        .typeText(page.passwordInput, user_OK.password)
        .typeText(page.passwordConfirmationInput, '1')
        .click(page.confirmCheckbox)
        .click(page.continueButton);
    const passwordWarningText = Selector('#content > form > fieldset:nth-child(2) > div.form-group.required.has-error > div > div').textContent;
    await t.expect(passwordWarningText).eql('Password confirmation does not match password!');
});