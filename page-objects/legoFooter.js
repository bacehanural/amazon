module.exports = {

    url: 'https://lego.maf.demo.emakina.ae/',
    
    elements: {

        //Top Footer Elements
        footerField: '.Footer',
        subscribeLego: '.top-footer-wrapper .top-footer-element:first-child .imageLink-wrapper',
        stayConnected: '.top-footer-wrapper .top-footer-element:nth-child(2) .imageLink-wrapper',
        checkOrderStatus: '.top-footer-wrapper .top-footer-element:nth-child(3) .imageLink-wrapper',
        findLegoStore: '.top-footer-wrapper .top-footer-element:nth-child(4) .imageLink-wrapper',

        acceptCookiesButton: '.btn-accept',
        themesFirstItem: '.theme-carousel-wrapper:first-child .item-wrapper:first-child a',
        themesPLPFirstItem: '.ProductListSlot app-product-list > div > div > div:nth-child(3) > div:first-child a',
        addToBagButton: '.Summary app-custom-product-add-to-cart-component button',
        cardModalPageCheckoutButton: '.cx-dialog-body .cx-dialog-buttons .btn-secondary',

        //Navigation Footer General
        footerGeneral: '.flex-row.navigation-footer-general',
        customerService: '.flex-row.navigation-footer-general > div:first-child',
        //Customer Service
        contactUs: '.flex-row.navigation-footer-general > div:first-child .list-unstyled li:nth-child(2) cx-generic-link',
        buildingInstructions: '.flex-row.navigation-footer-general > div:first-child .list-unstyled li:nth-child(3) cx-generic-link',
        missingParts: '.flex-row.navigation-footer-general > div:first-child .list-unstyled li:nth-child(4) cx-generic-link',
        commonQuestions: '.flex-row.navigation-footer-general > div:first-child .list-unstyled li:nth-child(5) cx-generic-link', //common questions duplicated, bug must be fixed

        shopping: '.flex-row.navigation-footer-general > div:nth-child(2)',
        //Shopping
        shippingHandling: '.flex-row.navigation-footer-general > div:nth-child(2) .list-unstyled li:first-child cx-generic-link',
        paymentMethods: '.flex-row.navigation-footer-general > div:nth-child(2) .list-unstyled li:nth-child(2) cx-generic-link',
        giftCards: '.flex-row.navigation-footer-general > div:nth-child(2) .list-unstyled li:nth-child(3) cx-generic-link',
        offersPromotions: '.flex-row.navigation-footer-general > div:nth-child(2) .list-unstyled li:nth-child(4) cx-generic-link',
        termsConditions: '.flex-row.navigation-footer-general > div:nth-child(2) .list-unstyled li:nth-child(5) cx-generic-link',
        termsConditionsHeader: '.Section3 cx-paragraph:first-child > p > h1',
        shoppingPrivacyPolicy: '.flex-row.navigation-footer-general > div:nth-child(2) .list-unstyled li:nth-child(6) cx-generic-link',
        shoppingCookieSettings: '.flex-row.navigation-footer-general > div:nth-child(2) .list-unstyled li:nth-child(7) cx-generic-link',

        features: '.flex-row.navigation-footer-general > div:nth-child(3)',
        //Features
        requestLegoCatalog: '.flex-row.navigation-footer-general > div:nth-child(3) .list-unstyled li:first-child cx-generic-link',
        vipProgram: '.flex-row.navigation-footer-general > div:nth-child(3) .list-unstyled li:nth-child(2) cx-generic-link',
        legoland: '.flex-row.navigation-footer-general > div:nth-child(3) .list-unstyled li:nth-child(3) cx-generic-link',
        miniBuild: '.flex-row.navigation-footer-general > div:nth-child(3) .list-unstyled li:nth-child(4) cx-generic-link',
        education: '.flex-row.navigation-footer-general > div:nth-child(3) .list-unstyled li:nth-child(5) cx-generic-link',
        legoLife: '.flex-row.navigation-footer-general > div:nth-child(3) .list-unstyled li:nth-child(6) cx-generic-link',
        legoStore: '.flex-row.navigation-footer-general > div:nth-child(3) .list-unstyled li:nth-child(7) cx-generic-link',

        legoFooterImage: '.flex-row.navigation-footer-general > div:nth-child(4) > cx-media > img',

        //Bottom Footer Wrapper
        bottomFooterWrapper: '.row.bottom-footer-wrapper',
        privacyPolicy: '.row.bottom-footer-wrapper .bottom-footer-top-link-desktop:first-child cx-generic-link',
        cookiesFooterLink: '.row.bottom-footer-wrapper .bottom-footer-top-link-desktop:nth-child(2) cx-generic-link',
        legalNotice: '.row.bottom-footer-wrapper .bottom-footer-top-link-desktop:nth-child(3) cx-generic-link',
        termsOfUse: '.row.bottom-footer-wrapper .bottom-footer-top-link-desktop:nth-child(4) cx-generic-link',

    },

    commands: [{

        checkInitialElements: function() {
            return (
              this.waitForElementVisible('@footerField', 1000)
                .waitForElementVisible('@subscribeLego', 1000)
                .waitForElementVisible('@stayConnected', 1000)
                .waitForElementVisible('@checkOrderStatus', 1000)
                .waitForElementVisible('@findLegoStore', 1000)
            );
        },

        acceptCookies: function() {
            return this.waitForElementVisible('@acceptCookiesButton', 1000).click('@acceptCookiesButton');
        },

        clickThemesFirstItem: function() {
            return this.waitForElementVisible('@themesFirstItem', 1000).click('@themesFirstItem');
        },

        clickThemesPLPFirstItem: function() {
            return this.waitForElementVisible('@themesPLPFirstItem', 1000).click('@themesPLPFirstItem');
        },

        clickAddToBagButton: function() {
            return this.waitForElementVisible('@addToBagButton', 1000).click('@addToBagButton');
        },

        clickModalCheckoutButton: function() {
            return this.waitForElementVisible('@cardModalPageCheckoutButton', 1000).click('@cardModalPageCheckoutButton');
        },




        clickPrivacyPolicy: function() {
            return this.waitForElementVisible('@privacyPolicy', 1000).click('@privacyPolicy');
        },

        clickCookiesFooterLink: function() {
            return this.waitForElementVisible('@cookiesFooterLink', 1000).click('@cookiesFooterLink');
        },

        clickLegalNotice: function() {
            return this.waitForElementVisible('@legalNotice', 1000).click('@legalNotice');
        },

        clickTermsOfUse: function() {
            return this.waitForElementVisible('@termsOfUse', 1000).click('@termsOfUse');
        },

        //Customer Service

        clickContactUs: function() {
            return this.waitForElementVisible('@contactUs', 1000).click('@contactUs');
        },

        clickBuildingInstructions: function() {
            return this.waitForElementVisible('@buildingInstructions', 1000).click('@buildingInstructions');
        },

        clickMissingParts: function() {
            return this.waitForElementVisible('@missingParts', 1000).click('@missingParts');
        },

        clickCommonQuestions: function() {
            return this.waitForElementVisible('@commonQuestions', 1000).click('@commonQuestions');
        },

        //Shopping

        clickShippingHandling: function() {
            return this.waitForElementVisible('@shippingHandling', 1000).click('@shippingHandling');
        },

        clickPaymentMethods: function() {
            return this.waitForElementVisible('@paymentMethods', 1000).click('@paymentMethods');
        },

        clickGiftCards: function() {
            return this.waitForElementVisible('@giftCards', 1000).click('@giftCards');
        },

        clickOffersPromotions: function() {
            return this.waitForElementVisible('@offersPromotions', 1000).click('@offersPromotions');
        },

        clickTermsConditions: function() {
            return this.waitForElementVisible('@termsConditions', 1000).click('@termsConditions');
        },

        clickShoppingPrivacyPolicy: function() {
            return this.waitForElementVisible('@shoppingPrivacyPolicy', 1000).click('@shoppingPrivacyPolicy');
        },

        clickShoppingCookieSettings: function() {
            return this.waitForElementVisible('@shoppingCookieSettings', 1000).click('@shoppingCookieSettings');
        },

        //Features

        clickRequestLegoCatalog: function() {
            return this.waitForElementVisible('@requestLegoCatalog', 1000).click('@requestLegoCatalog');
        },

        clickVipProgram: function() {
            return this.waitForElementVisible('@vipProgram', 1000).click('@vipProgram');
        },

        clickLegoland: function() {
            return this.waitForElementVisible('@legoland', 1000).click('@legoland');
        },

        clickMiniBuild: function() {
            return this.waitForElementVisible('@miniBuild', 1000).click('@miniBuild');
        },

        clickEducation: function() {
            return this.waitForElementVisible('@education', 1000).click('@education');
        },

        clickLegoLife: function() {
            return this.waitForElementVisible('@legoLife', 1000).click('@legoLife');
        },

        clickLegoStore: function() {
            return this.waitForElementVisible('@legoStore', 1000).click('@legoStore');
        },

        //Footer Flex-Row Components

        clickSubscribeLego: function() {
            return this.waitForElementVisible('@subscribeLego', 1000).click('@subscribeLego');
        },

        clickStayConnected: function() {
            return this.waitForElementVisible('@stayConnected', 1000).click('@stayConnected');
        },

        clickCheckOrderStatus: function() {
            return this.waitForElementVisible('@checkOrderStatus', 1000).click('@checkOrderStatus');
        },

        clickFindLegoStore: function() {
            return this.waitForElementVisible('@findLegoStore', 1000).click('@findLegoStore');
        },
        
    }]
};