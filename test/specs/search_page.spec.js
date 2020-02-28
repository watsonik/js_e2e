const expect = require("chai").expect;
const PageFactory = require("../page_objects/pageFactory");

describe("Search page", function () {

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        return browser.manage().window().maximize();
    });

    xit('Positive: Search should provide results', async function () {
        const homePage = PageFactory.getPage("Home");
        await homePage.open();
        await homePage.clickSearchButton();
        const searchPage = await homePage.sendSearchRequest('Flash');
        await searchPage.resultsCarousel.waitForPresence();
        const resultsCount = await searchPage.resultsCarousel.getCount();
        expect(resultsCount, 'Nothing found').to.be.at.least(1);
        // expect.isAbove(resultsCount, 1);
    });

});
