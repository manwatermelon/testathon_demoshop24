import { Selector } from 'testcafe';

const accountElem = Selector('#top-links > ul > li.dropdown');
const registerLink = Selector('#top-links > ul > li.dropdown.open > ul > li:nth-child(1) > a');

const name = Selector('#input-firstname');
const lastName = Selector('#input-lastname');
const mail = Selector('#input-email');
const telephone = Selector('#input-telephone');
const password = Selector('#input-password');
const passwordConfirmation = Selector('#input-confirm');
const checkboxAgree = Selector('*').withAttribute('name', 'agree');
const buttonContinue = Selector('input[type=submit]').filter(node => node.value = "Continue");

fixture`User Registration`
    .page`http://demoshop24.com`;

test('should create account', async t => {
    await t.click(accountElem)
        .click(registerLink);


    await t.typeText(name, "Alex")
        .typeText(lastName, "Arb")
        .typeText(mail, "test@email.com")
        .typeText(telephone, "+37100000000")
        .typeText(password, "Qwerty123")
        .typeText(passwordConfirmation, "Qwerty123")
        .click(checkboxAgree)
        .click(buttonContinue);
});