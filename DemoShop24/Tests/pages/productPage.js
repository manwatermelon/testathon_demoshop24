import { Selector } from 'testcafe';

export default class ProductPage {
    constructor() {
        this.name = Selector('.btn-group+h1');
    }
}