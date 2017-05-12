
var assert = require('assert');
var expect = require('chai').expect

describe('Walmart search', function() {
    it('searches for baby toys on walmart', function() {
        browser.url('https://www.walmart.com/');
        browser.setValue('[data-automation-id=header-search-input]', 'baby toys');
        browser.keys('Enter');
        expect(browser.elements('.search-result-gridview-items')).to.be.defined;

    }).timeout(15000);

    it('clicks on  my login', function() {
        browser.url('https://www.walmart.com/');

        browser.click('.header-GlobalAccountFlyout-link');
        browser.setValue('input[name="email"]', 'walmartxyz@walmart.com');
        browser.setValue('[type="password"]', 'test123');
        browser.click('[data-automation-id="signin-submit-btn"]');
        browser.waitForVisible('.header-GlobalAccountFlyout-link');
        // browser.waitUntil(function () {
        //     return browser.getText('.header-GlobalAccountFlyout-link') === "Hello, Test"
        // }, 5000, 'expected text to be different after 5s');
        expect(browser.getText('.header-GlobalAccountFlyout-link')).to.be.equal("Hello, Test");
    }).timeout(15000);

    it("searches on amazon and clicks on product", function(){
        browser.url("https://www.amazon.com");
        browser.setValue('#twotabsearchtextbox', "kindle");
        browser.click('.nav-input');
        expect(browser.element('#s-results-list-atf li'))

        var results = $$('#s-results-list-atf li').filter(function (link) {
            return link.isVisible();
        });
        expect(results.length).to.be.not.equal(0);
        results[0].click();
        expect(browser.element('#productTitle')).to.be.defined;
    }).timeout(15000);

    it("searches on amazon and clicks on product", function(){
        browser.url("https://www.amazon.com");
        browser.setValue('#twotabsearchtextbox', "kindle");
        browser.click('.nav-input');
        expect(browser.element('#s-results-list-atf li'))

        var results = $$('#s-results-list-atf li').filter(function (link) {
            return link.isVisible();
        });
        expect(results.length).to.be.not.equal(0);
        results[0].click();
        expect(browser.element('#productTitle')).to.be.defined;
    }).timeout(15000);


});