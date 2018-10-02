import {user_NOK} from "./mocks/user.mocks";
import RegistrationPage from 'pages/registrationPage';

const page = new RegistrationPage();

fixture`User Registration`
    .page`http://demoshop24.com/index.php?route=account/register`;

test('should have mandatory fields', async t => {
    await t
        .typeText(page.nameInput, user_NOK.firstName)
        .typeText(page.lastNameInput, user_NOK.secondName)
        .typeText(page.mailInput, user_NOK.email)
        .typeText(page.telephoneInput, user_NOK.phoneNumber)
        .typeText(page.passwordInput, user_NOK.password)
        .typeText(page.passwordConfirmationInput, user_NOK.password)
        .click(page.confirmCheckbox);
});

test('should validate password equality'), async t => {

}