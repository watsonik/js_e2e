const expect = require("chai").expect;
const PageFactory = require("../utils/page_objects/pageFactory");
const EC = protractor.ExpectedConditions;
describe("Home page", function () {

    beforeEach(function () {
        browser.waitForAngularEnabled(true);
        return browser.manage().window().maximize();
    });

    it('Hope page should be opened', async function () {
        const homePage = PageFactory.getPage("Home");
        await homePage.open();
        const title = await homePage.getTitle();
        expect(title).to.be.equal('Western Digital Store');
    });

    it('Search should return results', async function() {
        //todo implement
        expect(1).to.be.equal(2);
    });

});
