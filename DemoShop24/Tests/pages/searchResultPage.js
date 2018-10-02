import { Selector } from 'testcafe';

export default class SearchResultPage {
    constructor() {
        this.header = Selector('#content > h1');
        this.searchCriteria = Selector('#input-search');
        this.searchInDescription = Selector('*').withAttribute('name', 'description');
        this.searchInDescription = Selector('*').withAttribute('name', 'description');
        this.searchInCategory = Selector('*').withAttribute('name', 'sub_category');
        this.sortBy = Selector('#input-sort');
        this.show = Selector('#input-limit');
        this.products = Selector('.product-thumb');
        this.productImage = Selector('.product-thumb a');
    }

    getProductByName(name) {
        return Selector('.product-thumb').filter(node => node.Selector(['title='+name+'\'']));
    }
}