const logger = require('../../../config/logger.config');
const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");

class HomePage extends BasePage {
    constructor() {
        super();
        this.url = "https://shop.westerndigital.com";
        this.searchButton = new Element("Contact Us Button", "#searchright");
    };

    open() {
        return super.open(this.url);
    };

    clickSearch(){
        logger.info(`Clicking "Search Button"`);
        return this.searchButton.click();
    };
};

module.exports = HomePage;
