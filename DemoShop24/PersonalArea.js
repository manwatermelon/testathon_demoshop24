import { Selector } from 'testcafe';

const accountElem = Selector('#top-links > ul > li.dropdown');
const registerLink = Selector('#top-links > ul > li.dropdown.open > ul > li:nth-child(1) > a');
const loginElem = Selector('#top-links > ul > li.dropdown.open > ul > li:nth-child(2) > a');

const name = Selector('#input-firstname');
const lastName = Selector('#input-lastname');
const mail = Selector('#input-email');
const telephone = Selector('#input-telephone');
const password = Selector('#input-password');
const passwordConfirmation = Selector('#input-confirm');
const checkboxAgree = Selector('*').withAttribute('name', 'agree');
const buttonContinue = Selector('input[type=submit]').filter(node => node.value = "Continue");
const emailLoginElem = Selector('#input-email');
const passwordLoginElem = Selector('#input-password');
const buttonLogin = Selector('input[type=submit]').filter(node => node.value = "Login");


const mailVal = 'test1@email.com';
const passwordVal = 'Qwerty123';

fixture`User Registration`
    .page`http://demoshop24.com`;

test('should create account', async t => {
    //go to registration
    await t.click(accountElem)
        .click(registerLink);

    //fill in fields
    await t.typeText(name, "Alex")
        .typeText(lastName, "Arb")
        .typeText(mail, mailVal)
        .typeText(telephone, "+37100000000")
        .typeText(password, passwordVal)
        .typeText(passwordConfirmation, passwordVal)
        .click(checkboxAgree)
        .click(buttonContinue);
    //go to login
    await t.click(accountElem)
        .click(loginElem);
    //type in password and login
    await t.typeText(emailLoginElem, mailVal)
        .typeText(passwordLoginElem, passwordVal)
        .click(buttonLogin);
});