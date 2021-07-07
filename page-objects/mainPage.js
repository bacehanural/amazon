module.exports = {

    url: 'https://www.amazon.com/',
    
    elements: {

        //Home Page Global Header Elements

        amazonLogo: '#nav-logo-sprites',
        deliveryCountry: '#nav-global-location-popover-link',
        relatedDeliveryCountryName: '#glow-ingress-line2',
        searchField: '#nav-search-bar-form',
        languageFlagIcon: '#icp-nav-flyout',
        acountLists: '#nav-link-accountList',
        
        loggedInUserName: '#nav-link-accountList-nav-line-1',
        
        returnOrders: '#nav-orders',
        cartIcon: '#nav-cart',

        homeGlobalHeader: '#nav-belt',



        //Account & Lists Elements

        signInButton: '#nav-signin-tooltip .nav-action-button',
        registerButton: '.nav-signin-tooltip-footer > .nav-a',
        logout: '#nav-item-signout',



        //registration Elements

        amazonLogoRegisteration: '.a-link-nav-icon',
        createAccountHeader: '#authportal-main-section > div:nth-child(2) > div .a-spacing-small',
        registerYourName: 'input[id="ap_customer_name"]',

        registerEmail: 'input[id="ap_email"]',

        registerPassword: 'input[id="ap_password"]',

        registerReEnterPassword: 'input[id="ap_password_check"]',
        registerCreateYourAmazonAccountButton: '#continue',
        registerSignIn: '.a-box.a-spacing-extra-large > div > div:nth-child(7) > .a-link-emphasis',
        registerCreateBusinessAccount: '#ab-registration-link',
        registerFooter: '.a-section.a-spacing-top-extra-large.auth-footer',


        registrationForm: '#ap_register_form',

        solveThisPuzzleRegistration: '#cvf-page-content',
        registerEmailAlreadyInUseSignIn: '#authportal-main-section > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a',



        //The First Step of Login Page Elements

        loginFirstStepEmail: 'input[id="ap_email"]',

        logincontinueButton: '.a-button.a-button-span12.a-button-primary',
        loginNeedHelp: '.a-expander-prompt',
        conditionsOfUse: '#legalTextRow > a:nth-child(1)',
        privacyPolicy: '#legalTextRow > a:nth-child(2)',
        loginCreateYourAmazonAccountButton: '#createAccountSubmit',
        loginFirstStepPanel: '#authportal-main-section > div:nth-child(2)',



        //The Second Step of Login Page Elements

        registeredMailAddressSecondLogin: '.a-row.a-spacing-base > span',
        forgotyourPasswordSecondLogin: '#auth-fpp-link-bottom',

        secondLoginPassword: 'input[id="ap_password"]',

        secondLoginSignInButton: '#signInSubmit',
        secondStepLoginDetailsInfo: '#remember_me_learn_more_link',



        //Invalid Email Address

        emailAddressAlreadyInUse: '#authportal-main-section > div:nth-child(2) > div',

    },

    
    
    commands: [{

        //Initial Elements from Amazon HomePage

        checkInitialElements: function() {
            return (
              this.waitForElementVisible('@amazonLogo', 1000)
                .waitForElementVisible('@deliveryCountry', 1000)
                .waitForElementVisible('@relatedDeliveryCountryName', 1000)
                .waitForElementVisible('@searchField', 1000)
                .waitForElementVisible('@languageFlagIcon', 1000)
                .waitForElementVisible('@acountLists', 1000)
                .waitForElementVisible('@returnOrders', 1000)
                .waitForElementVisible('@cartIcon', 1000)
            );
        },



        //Initial Elements from Amazon Registration Page

        checkRegistrationElements: function() {
            return (
              this.waitForElementVisible('@amazonLogoRegisteration', 1000)
                .waitForElementVisible('@createAccountHeader', 1000)
                .waitForElementVisible('@registerYourName', 1000)
                .waitForElementVisible('@registerEmail', 1000)
                .waitForElementVisible('@registerPassword', 1000)
                .waitForElementVisible('@registerReEnterPassword', 1000)
                .waitForElementVisible('@registerCreateYourAmazonAccountButton', 1000)
                .waitForElementVisible('@registerSignIn', 1000)
                .waitForElementVisible('@registerCreateBusinessAccount', 1000)
                .waitForElementVisible('@registerFooter', 1000)
            );
        },



        //Initial Elements of the First Step from Amazon Login Page

        checkFirstStepLoginElements: function() {
            return (
              this.waitForElementVisible('@loginFirstStepEmail', 1000)
                .waitForElementVisible('@logincontinueButton', 1000)
                .waitForElementVisible('@loginNeedHelp', 1000)
                .waitForElementVisible('@conditionsOfUse', 1000)
                .waitForElementVisible('@privacyPolicy', 1000)
                .waitForElementVisible('@loginCreateYourAmazonAccountButton', 1000)
                .waitForElementVisible('@registerFooter', 1000)
            );
        },



        //Initial Elements of the Second Step from Amazon Login Page

        checkSecondStepLoginElements: function() {
            return (
              this.waitForElementVisible('@registeredMailAddressSecondLogin', 1000)
                .waitForElementVisible('@forgotyourPasswordSecondLogin', 1000)
                .waitForElementVisible('@secondLoginPassword', 1000)
                .waitForElementVisible('@secondLoginSignInButton', 1000)
                .waitForElementVisible('@secondStepLoginDetailsInfo', 1000)
                .waitForElementVisible('@registerFooter', 1000)
            );
        },



        //Initial Elements from the Account & Lists

        checkAccountandListsDropDownListBoxElements: function() {
            return (
              this.waitForElementVisible('@acountLists', 1000)
                .waitForElementVisible('@homeGlobalHeader', 1000)
            );
        },



        //Registration Functions

        clickRegister: function() {
            return this.waitForElementVisible('@registerButton', 1000).click('@registerButton');
        },

        clickRegisterAmazonLogo: function() {
            return this.waitForElementVisible('@amazonLogoRegisteration', 1000).click('@amazonLogoRegisteration');
        },

        registerYourName: function(regYourName) {
            return this.waitForElementVisible('@registerYourName', 1000).setValue('@registerYourName', regYourName);
        },

        registerEmail: function(regEmail) {
            return this.waitForElementVisible('@registerEmail', 1000).setValue('@registerEmail', regEmail);
        },

        registerPassword: function(regPassword) {
            return this.waitForElementVisible('@registerPassword', 1000).setValue('@registerPassword', regPassword);
        },

        registerReEnterPassword: function(reEnterPassword) {
            return this.waitForElementVisible('@registerReEnterPassword', 1000).setValue('@registerReEnterPassword', reEnterPassword);
        },

        clickRegisterationButton: function() {
            return this.waitForElementVisible('@registerCreateYourAmazonAccountButton', 1000).click('@registerCreateYourAmazonAccountButton');
        },

        clickRegisterEmailAlreadyInUseSignIn: function() {
            return this.waitForElementVisible('@registerEmailAlreadyInUseSignIn', 1000).click('@registerEmailAlreadyInUseSignIn');
        },



        //The First Step of Login Functions

        clickSignInButton: function() {
            return this.waitForElementVisible('@signInButton', 1000).click('@signInButton');
        },

        loginFirstStepEmail: function(loginFirstStepEmail) {
            return this.waitForElementVisible('@loginFirstStepEmail', 1000).setValue('@loginFirstStepEmail', loginFirstStepEmail);
        },

        clickLoginContinueButton: function() {
            return this.waitForElementVisible('@logincontinueButton', 1000).click('@logincontinueButton');
        },

        clickLoginCreateAmazonAccountButton: function() {
            return this.waitForElementVisible('@loginCreateYourAmazonAccountButton', 1000).click('@loginCreateYourAmazonAccountButton');
        },



        //The Second Step of Login Functions

        secondLoginPassword: function(secondLoginPassword) {
            return this.waitForElementVisible('@secondLoginPassword', 1000).setValue('@secondLoginPassword', secondLoginPassword);
        },

        clickSecondLoginSignInButton: function() {
            return this.waitForElementVisible('@secondLoginSignInButton', 1000).click('@secondLoginSignInButton');
        },



        //Logout Functions
        
        clickLogoutButton: function() {
            return this.waitForElementVisible('@logout', 1000).click('@logout');
        },


    }]
};