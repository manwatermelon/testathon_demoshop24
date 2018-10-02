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
const myAccountElem = Selector('#top-links > ul > li.dropdown.open > ul > li:nth-child(1) > a');
const editProfileElem = Selector('#content > ul:nth-child(2) > li:nth-child(1) > a');

const mailVal = 'test7@email.com';
const passwordVal = 'Qwerty123';
const nameVal = 'Alex';
const lastNameVal = 'Arb';
const telephoneVal = '+37100000000';

fixture`User Registration`
    .page`http://demoshop24.com`;

test('should create account', async t => {
    //go to registration
    await t.click(accountElem)
        .click(registerLink);

    //fill in fields
    await t.typeText(name, nameVal)
        .typeText(lastName, lastNameVal)
        .typeText(mail, mailVal)
        .typeText(telephone, telephoneVal)
        .typeText(password, passwordVal)
        .typeText(passwordConfirmation, passwordVal)
        .click(checkboxAgree)
        .click(buttonContinue);
    //go to my account
    await t.click(accountElem)
        .click(myAccountElem);
    //go to edit account and verify
    await t.click(editProfileElem);
    await t.expect(name.value).eql(nameVal);
    await t.expect(lastName.value).eql(lastNameVal);
    await t.expect(mail.value).eql(mailVal);
    await t.expect(telephone.value).eql(telephoneVal);

});