import { Selector } from 'testcafe';

const name = Selector('#input-firstname');
const lastName = Selector('#input-lastname');
const mail = Selector('#input-email');
const telephone = Selector('#input-telephone');
const password = Selector('#input-password');
const passwordConfirmation = Selector('#input-confirm');
const checkboxConfirm = Selector('*').withAttribute('agree');

fixture`User Registration`
    .page`http://demoshop24.com`;

test('should create account', async t => {
    await t
        .navigateTo('http://demoshop24.com/index.php?route=account/register');

    await t.typeText(name, "Alex");
    await t.typeText(lastName, "Arb");
    await t.typeText(mail, "test@email.com");
    await t.typeText(telephone, "+37100000000");
    await t.typeText(password, "Qwerty123");
    await t.typeText(passwordConfirmation, "Qwerty123");
    await t.click(checkboxConfirm);

});