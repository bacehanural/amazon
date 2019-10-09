module.exports = {

    url: 'https://lego.maf.demo.emakina.ae/',
    
    elements: {

        //Carousel Component
        acceptCookiesButton: '.btn-accept',
        cookiesRibbon: '.cookies.text-white',
        cookiesSettingsButton: '.btn-white', //registered 
        save: '#example', //on consents page

        //Sign in
        typeEmail: 'input[type = "email"]',
        typePassword: 'input[type = "password"]',
        signInButton: '.btn-block.btn-primary',
        signInButtonMainPage: '.SiteTopHeaderRight .myAccount-Component button',

    },
    commands: [{

        signInPage: function() {
            return this.waitForElementVisible('@signInButtonMainPage', 10000).click('@signInButtonMainPage');
        },

        typeEmail: function(email) {
            return this.waitForElementVisible('@typeEmail', 1000).setValue('@typeEmail', email);
        },

        typePassword: function(password) {
            return this.waitForElementVisible('@typePassword', 1000).setValue('@typePassword', password);
        },

        clickSignInButton: function() {
            return this.waitForElementVisible('@signInButton', 10000).click('@signInButton');
        },

        acceptCookies: function() {
            return this.waitForElementVisible('@acceptCookiesButton', 10000).click('@acceptCookiesButton');
        },

        cookiesSettings: function() {
            return this.waitForElementVisible('@cookiesSettingsButton', 10000).click('@cookiesSettingsButton');
        },

    }]
};