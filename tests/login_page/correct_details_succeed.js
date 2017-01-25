/**
 * Created by andrewfowler on 1/25/17.
 */

var https = require('https');
var SauceLabs = require("saucelabs");

module.exports = {
    'Load login page' : function (browser) {
        var login_page = browser.page.login_page();

        login_page.navigate()
            .waitForElementVisible('@username', 1000)
            .setValue('@username', 'tomsmith')
            .setValue('@password', 'SuperSecretPassword!')
            .click('@submit')
            .waitForElementVisible("@flash", 1000)
            .assert.containsText("@flash", "You logged into a secure area!");

        browser.end();
    }
};