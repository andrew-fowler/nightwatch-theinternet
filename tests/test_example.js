module.exports = {

    '@tags': ['guineaPig'],

    'Example Check Title 2': function(client) {
        client
            .url('https://saucelabs-sample-test-frameworks.github.io/training-test-page')
            .waitForElementVisible('body', 1000)
            .assert.title('I am a page title - Sauce Labs');
    },

    afterEach: function(client, done) {
        client.customSauceEnd(done);
    }

};
  //module.exports = {
  //  'Demo test Google' : function (browser) {
  //    browser
  //      .url('http://www.google.com')
  //      .waitForElementVisible('body', 1000)
  //      .setValue('input[type=text]', 'nightwatch')
  //      .waitForElementVisible('button[name=btnG]', 1000)
  //      .click('button[name=btnG]')
  //      .pause(1000)
  //      .assert.containsText('#main', 'Night Watch')
  //      .end();
  //  }
  //};