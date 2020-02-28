const HomePage = require("./home_page/home_page");
const PLP = require("./products_page/products_page");
const BasePage = require("../core/base_page/base_page");

class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case "Home":
                return new HomePage();
            case "PLP":
                return new PLP();
            default:
                return new BasePage();
        };
    };
};

module.exports = PageFactory;
