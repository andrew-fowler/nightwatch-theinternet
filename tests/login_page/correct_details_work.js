/**
 * Created by andrewfowler on 1/25/17.
 */
/**
 * Created by andrewfowler on 1/25/17.
 */
//

var https = require('https');
var SauceLabs = require("saucelabs");

module.exports = {
    'Load login page' : function (browser) {
        browser
            .url('https://the-internet.herokuapp.com/login')
            .waitForElementVisible('input[type=text]', 1000)
    },

    'Enter username' : function (browser) {
        browser
            .setValue('input[type=text]', 'tomsmith')
    },

    'Enter password' : function (browser) {
        browser
            .setValue('input[type=password]', 'SuperSecretPassword!')
    },

    'Submit form' : function (browser) {
        browser
            .click('button[type=submit]')
    },

    'Check warning is displayed' : function (browser) {
        browser
            .waitForElementVisible("div[id='flash']", 1000)
            .assert.containsText("div[id='flash']", "ou logged into a secure area!")
            .end();
    }
};