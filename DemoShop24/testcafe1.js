import { Selector } from 'testcafe';

fixture`TestFixture`
    .page `http://demoshop24.com`;

test('Check Label HTML', async t => {
    await t
        .click('#top-links > ul > li:nth-child(3) > a')
        .navigateTo('http://demoshop24.com/index.php?route=checkout/cart');
});