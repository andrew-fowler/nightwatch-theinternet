/**
 * Created by andrewfowler on 1/25/17.
 */
var https = require('https');
var SauceLabs = require("saucelabs");

module.exports = {
    'Go to Google and enter search term' : function (browser) {
        browser
            .url('http://www.google.com')
            .waitForElementVisible('body', 1000)
            .setValue('input[type=text]', 'nightwatch')
            .waitForElementVisible('button[name=btnG]', 1000)
    },

    'Submit search' : function (browser) {
        browser
            .click('button[name=btnG]')
            .pause(1000)
            .assert.containsText('#main', 'Night Watch')
            .end();
    }
    //,
    //
    //afterEach: function(client, done) {
    //    console.log('Closing down...');
    //    client.customSauceEnd(done);
    //}

};