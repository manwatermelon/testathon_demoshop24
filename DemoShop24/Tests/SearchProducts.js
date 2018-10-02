import { Selector } from 'testcafe';
import SearchResultPage from './pages/searchResultPage';
import ProductPage from './pages/productPage';


const page = new SearchResultPage();
const product = new ProductPage();

const searchBox = Selector('*').withAttribute("name", "search");
const searchBtn = Selector('.fa-search');


fixture `Product Search`
    .page`http://demoshop24.com`;

var testCases = [
    { name: "login", path: 'account/login' },
	{ name: "register", path: 'account/register' },
	{ name: "forgotten passwod", path: 'account/forgotten' },
	{ name: "contacts", path: 'information/contact' },
	{ name: "checkout", path: 'checkout/cart' },
	{ name: "home", path: 'common/home' },
];

for (const testCase of testCases) {
	const testName = 'search is visible on page '+testCase.name;
    const url = 'http://demoshop24.com/index.php?route='+testCase.path;
    
	test(testName, async t => {
        await t.navigateTo(url);
        await t.expect(searchBox.exists);
    });
}