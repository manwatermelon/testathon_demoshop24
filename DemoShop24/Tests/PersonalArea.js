import {user_NOK} from "./mocks/user.mocks";
import RegistrationPage from 'pages/registrationPage';

const page = new RegistrationPage();

fixture`User Registration`
    .page`http://demoshop24.com/index.php?route=account/register`;

test('should have mandatory fields', async t => {
    await t
        .typeText(page.nameInput,user_NOK.firstName )
        .typeText(page.lastNameInput, user_NOK.secondName)
        .typeText(page.mailInput, '')
        .typeText(page.telephoneInput, '')
        .typeText(page.passwordInput, '')
        .typeText(page.passwordConfirmationInput, '')
        .click(page.confirmCheckbox)
});