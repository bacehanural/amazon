module.exports = {

    url: 'https://lego.c1xjddw2-majidalfu1-d1-public.model-t.cc.commerce.ondemand.com/',
    
    elements: {

        //Carousel Component
        acceptCookiesButton: '.btn-accept',
        cookiesRibbon: '.cookies.text-white',
        cookiesSettingsButton: '.btn-white', //registered 
        save: '#example', //on consents page???

        //Sign in
        typeEmail: 'input[id = "email"]',
        typePassword: 'input[type = "password"]',
        signInButton: '.btn-block.btn-primary',
        accountComponent: '.SiteTopHeaderRight .myAccount-Component .collapseButton',
        signInOutButtonMainPage: '#btn-logout', 

        //Register (fonksiyonları yazılmadı, story henüz develpment'a alınmamış)
        title: '.container .cx-section div:first-child [formcontrolname="titleCode"]', //option seçilecek drop-down list box'tan
        firstName: 'input[name = "firstname"]',
        lastName: 'input[name = "lastname"]',
        emailRegister: 'input[type = "email"]',
        passwordRegister: '.container .cx-section div:nth-child(5) input[type = "password"]',
        confirmPassword: '.container .cx-section div:nth-child(6) input[type = "password"]',
        newsletterCheckbox: 'input[formcontrolname="newsletter"]',
        termsConditionsCheckbox: 'input[formcontrolname="termsandconditions"]',
        registerButton: 'button[type="submit"]',


    },
    commands: [{

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

        clickSignInOutButton: function() {
            return this.waitForElementVisible('@signInOutButtonMainPage', 10000).click('@signInOutButtonMainPage');
        },

        cookiesSettings: function() {
            return this.waitForElementVisible('@cookiesSettingsButton', 10000).click('@cookiesSettingsButton');
        },

    }]
};