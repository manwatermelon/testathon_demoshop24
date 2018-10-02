import { user_NOK } from "./mocks/user.mocks";
import { user_OK } from "./mocks/user.mocks";
import PageHeader from "./pages/pageHeader";
import LoginPage from "./pages/loginPage";
import { Selector } from 'testcafe';

const pageHeader = new PageHeader();
const page = new LoginPage();

fixture`User Login`
    .page`http://demoshop24.com/`
    .beforeEach(
        async t => {
            await t
                .click(pageHeader.myAccountElement)
                .click(pageHeader.loginElement);
        });

test('should have mandatory field validations messages', async t => {
    await t
        .typeText(page.emailInput, user_OK.email)
        .typeText(page.passwordInput, user_OK.password)
        .click(page.loginButton);

    await t.expect(page.isLoaded().ok());

});
