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

test('should have mandatory field validations messages', async t => {
    await t
        .click(page.continueButton);
    await t.expect(page.nameInput.sibling(0).textContent).eql("First Name must be between 1 and 32 characters!");
    await t.expect(page.lastNameInput.sibling(0).textContent).eql("Last Name must be between 1 and 32 characters!");
    await t.expect(page.mailInput.sibling(0).textContent).eql("E-Mail Address does not appear to be valid!");
    await t.expect(page.telephoneInput.sibling(0).textContent).eql("Telephone must be between 7 and 32 characters!");
    await t.expect(page.passwordInput.sibling(0).textContent).eql("Password must be between 4 and 20 characters!");
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