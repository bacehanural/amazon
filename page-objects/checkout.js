module.exports = {

    url: 'https://lego.c1xjddw2-majidalfu1-d1-public.model-t.cc.commerce.ondemand.com/',
    
    elements: {

        //Main Page Elements-Cookies Ribbon
        acceptCookiesRibbon: '.btn-accept',
        cookiesSettingsRibbon: '.btn-white',
        cookiesRibbon: '.cookies.text-white',

        //Account
        signIn: '.SiteTopHeaderRight .myAccount-Component .collapseButton',
        logInOutButton: '#btn-logout',

        typeEmail: 'input[id = "email"]',
        typePassword: 'input[type = "password"]',
        signInButton: 'app-customer-login-flex div.row.row3 button',

        //Series Carousel Component
        firstCardShopNow: '.Section3 .carousel-inner > div:first-child > div:first-child .carousel-caption > a',
        secondCardShopNow: '.Section3 .carousel-inner > div:first-child > div:nth-child(2) .carousel-caption > a',
        thirdCardShopNow: '.Section3 .carousel-inner > div:first-child > div:nth-child(3) .carousel-caption > a',

        //Mega Drop Down
        firstMegaDropDown: '.NavigationBar .navWrapper > div:first-child > button',
        firstMegaFirstItem:'app-header-mega-dropdown .navWrapper > div:first-child > div > div > div > div > div.col-10.collapse.show > div > div:first-child > div > app-custom-navigation-ui:first-child > div > app-cms-link-component > div > a',
        firstMegaTwentiethItem: '.NavigationBar > app-header-mega-dropdown div:first-child div:nth-child(2) > div > app-custom-navigation-ui:nth-child(10) a',
        secondMegaDropDown: '.NavigationBar .navWrapper > div:nth-child(2) > button',
        secondMegaFirstItem: 'app-header-mega-dropdown > div.navWrapper > div:nth-child(2)  div:first-child > div > div > button',
        shopBySeeAll: 'app-header-mega-dropdown > div.navWrapper > div:nth-child(2) .see-all-wrapper.collapse.show > .collapse.show app-cms-link-component a',

        //PLP
        starRate: 'app-product-list div:first-child > app-product-list-item cx-star-rating',
        firstProductAddToBagButton: 'app-product-list > div > div > .row > div:first-child button',
        thirdProductAddToBagButton: 'app-product-list > div > div > .row > div:nth-child(3) button',

        //Shopping Bag
        legoReflectContainer: '.SiteLogo > cx-banner > cx-generic-link > a',
        miniCart: '#dropdownManual',
        miniCartDropDownMenu: '.SiteTopHeaderRight > app-mini-cart > div > div > div',
        addedFirstProduct: '#miniCart-0 div:first-child > div.col-8 > div',
        emptyBagHeader: '.EmptyCartMiddleContent > cx-paragraph > p > div',
        emptyBagFirstDescription: '.EmptyCartMiddleContent > cx-paragraph > p > h1',
        emptyBagGuestSecondDescription: '.EmptyCartMiddleContent > cx-paragraph > p > h2',
        emptyBagGuestSignIn: '.EmptyCartMiddleContent .btn-primary',
        emptyBagStartShopping: '.EmptyCartMiddleContent > cx-paragraph:nth-child(2) > p > a',
        itemCountShoppingBag: 'app-custom-cart-details > div > .flex-row > .cart-detail-item-wrapper > div > app-custom-cart-item-list > div > div > div > .cx-item-list-desc',

        shoppingBagCheckoutButton: '.TopContent > app-custom-cart-details .flex-row > .action-items-wrapper > div > button',

        //PDP
        addToBagButton: '.add-to-cart-wrapper > button',

        //Shopping Modal Page
        xButton: 'ngb-modal-window  cx-added-to-cart-dialog div.cx-dialog-header.modal-header > button',
        removeButton: '.modal-body > div > div:nth-child(2) > div.cx-total.row > div.cx-label.col-8 > button',
        modalPageHeader: 'ngb-modal-window > div > div > app-add-to-bag-dialog > div.cx-dialog-header.modal-header > div',
        viewBagButton: '.modal-body > div > div > div > div:first-child > a',

        //Guest User - Checkout Continue as Guest/Register/Sign In Page
        checkoutContinueAsGuestButton: 'app-guest-checkout-login-register > div > div > .btn-primary',
        checkoutRegisterButton: 'app-guest-checkout-login-register > div > div > .btn-warning',
        checkoutSignInButton: 'app-returning-customer-checkout-login > div > button',

        //Guest User - Continue As Guest Page
        guestEmailAddress: 'input[formcontrolname = "email"]',
        guestConfirmEmailAddress: 'input[formcontrolname = "emailConfirmation"]',
        guestUserContinueButton: 'app-guest-checkout-login-register > div > div > button',

        //Checkout Page - Delivery Options
        clickAndCollectButton: 'app-delivery-method-selector > div > div > div > .flex-column.left-wrapper > button',
        homeDeliveryButton: 'app-delivery-method-selector > div > div > div > .flex-column.right-wrapper > button',

        //Checkout Page - Shipping Address Secton
        savedAddressDropDown: '.flex-column > div > ng-select', //Registered&Addressed User
        firstAddressOption: '.flex-column > div > ng-select > ng-dropdown-panel > div > div:nth-child(2) > div:first-child', //Registered&Addressed User
        shippingSectionSaveAddressButton: 'app-home-delivery > form > .flex-column > div > div:first-child > button',
        shippingSectionCancelButton: 'app-home-delivery > form > .flex-column > div > div:nth-child(2) > button',
        shippingMethodDropDown: 'app-delivery > .delivery-mode-wrapper > .row > div > ng-select',
        selectFirstShippingMethod: 'app-delivery > .delivery-mode-wrapper > .row > div > ng-select > ng-dropdown-panel > div > div:nth-child(2) > div:first-child > span',
        deliveryTimeDropDown: '.delivery-time-wrapper > .row > div:first-child > ng-select > div',
        selectFirstDeliveryTime: '.delivery-time-wrapper > .row > div:first-child > ng-select > ng-dropdown-panel > div > div:nth-child(2) > div:first-child > span',

        //Checkout Page - Contact Information
        useSameInformationAsShipping: 'app-custom-contact-information > div > div > div > label > span',
        saveContactInformationButton: 'app-custom-contact-information > div > form > .flex-column > div > div:first-child > button',
        contactInformationCancelButton: 'app-custom-contact-information > div > form > .flex-column > div > div:nth-child(2) > button',

        //Checkout Page - Payment Method Section
        paymentMethodOrderTotal: 'app-custom-checkout-order-summary > app-custom-order-summary > div > div:nth-child(6) > div',

        creditCardNumber: 'input[formcontrolname = "cardNumber"]',
        expirationDateMonth: 'app-custom-payment-method-component div:first-child div:nth-child(2) div:first-child > ng-select',
        selectFirstMonth: 'app-custom-payment-method-component div:first-child div:nth-child(2) div:first-child > ng-select > ng-dropdown-panel > div > div:nth-child(2) > div:first-child',
        expirationDateYear: 'app-custom-payment-method-component div:first-child div:nth-child(2)  div:nth-child(2) > ng-select > div > div',
        selectFourthYear: 'app-custom-payment-method-component div:first-child div:nth-child(2)  div:nth-child(2) > ng-select > ng-dropdown-panel > div > div:nth-child(2) > div:nth-child(4)',
        creditCardSecurityCode: 'input[formcontrolname = "cvn"]',
        paymentMethodTermsConditionsCheckbox: 'app-custom-payment-method-component div > div:first-child div:nth-child(3) > div span',
        paymentMethodPrivacyPolicyCheckbox: 'app-custom-payment-method-component div > div:first-child div:nth-child(4) > div span',
        proceedToPaymentButton: 'app-custom-payment-method-component div > div > div > button',     

        //Order Confirmation Page
        orderConfirmationOrderTotal: 'app-custom-checkout-order-summary > app-custom-order-summary > div > div:nth-child(3) > div',

    },

    
    commands: [{

        //Initials

        checkLoginPageInitialElements: function() {
            return (
              this.waitForElementVisible('@typeEmail', 3000)
                .waitForElementVisible('@typePassword', 3000)
                .waitForElementVisible('@signInButton', 3000)
            );
        },

        //Main Functions

        acceptCookies: function() {
            return this.waitForElementVisible('@acceptCookiesRibbon', 10000000).click('@acceptCookiesRibbon');
        },

        clickLogInOut: function() {
            return this.waitForElementVisible('@logInOutButton', 1000).click('@logInOutButton');
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

        clickLegoReflectContainer: function() {
            return this.waitForElementVisible('@legoReflectContainer', 1000).click('@legoReflectContainer');
        },//Redirects to home page-lego brand button


        //Mega drop-down list box

        clickFirstMegaFirstItem: function() {
            return this.waitForElementVisible('@firstMegaFirstItem', 1000).click('@firstMegaFirstItem');
        },

        clickFirstMegaTwentiethItem: function() {
            return this.waitForElementVisible('@firstMegaTwentiethItem', 1000).click('@firstMegaTwentiethItem');
        },

        clickShopBySeeAll: function() {
            return this.waitForElementVisible('@shopBySeeAll', 3000).click('@shopBySeeAll');
        },

        //PLP

        clickFirstAddToBagButtonPLP: function() {
            return this.waitForElementVisible('@firstProductAddToBagButton', 6000).click('@firstProductAddToBagButton');
        },

        clickThirdAddToBagButtonPLP: function() {
            return this.waitForElementVisible('@thirdProductAddToBagButton', 1000).click('@thirdProductAddToBagButton');
        },

        //Series Carousel Component Functions

        clickFirstCardShopNow: function() {
            return this.waitForElementVisible('@firstCardShopNow', 1000).click('@firstCardShopNow');
        },

        clickSecondCardShopNow: function() {
            return this.waitForElementVisible('@secondCardShopNow', 1000).click('@secondCardShopNow');
        },

        clickThirdCardShopNow: function() {
            return this.waitForElementVisible('@thirdCardShopNow', 1000).click('@thirdCardShopNow');
        },


        //PDP&Shopping Modal Page

        clickAddToBagButton: function() {
            return this.waitForElementVisible('@addToBagButton', 1000).click('@addToBagButton');
        },
        
        clickXModal: function() {
            return this.waitForElementVisible('@xButton', 1000).click('@xButton');
        },

        clickRemoveButton: function() {
            return this.waitForElementVisible('@removeButton', 1000).click('@removeButton');
        },

        clickViewBagButton: function() {
            return this.waitForElementVisible('@viewBagButton', 9000).click('@viewBagButton');
        },


        //Shopping Bag Functions

        clickAddedFirstProduct: function() {
            return this.waitForElementVisible('@addedFirstProduct', 1000).click('@addedFirstProduct');
        },

        clickMiniCart: function() {
            return this.waitForElementVisible('@miniCart', 1000).click('@miniCart');
        },

        clickStartShopping: function() {
            return this.waitForElementVisible('@emptyBagStartShopping', 1000).click('@emptyBagStartShopping');
        },

        clickShoppingBagCheckoutButton: function() {
            return this.waitForElementVisible('@shoppingBagCheckoutButton', 1000).click('@shoppingBagCheckoutButton');
        },


        //Guest User Continue As Guest/Register/sign In

        clickCheckoutContinueAsGuestButton: function() {
            return this.waitForElementVisible('@checkoutContinueAsGuestButton', 4000).click('@checkoutContinueAsGuestButton');
        },

        clickCheckoutRegisterButton: function() {
            return this.waitForElementVisible('@checkoutRegisterButton', 4000).click('@checkoutRegisterButton');
        },

        clickCheckoutSignInButton: function() {
            return this.waitForElementVisible('@checkoutSignInButton', 4000).click('@checkoutSignInButton');
        },

        //Continue As Guest Page
        
        clickContinueAsGuestEmailAddress: function() {
            return this.waitForElementVisible('@guestEmailAddress', 4000).click('@guestEmailAddress');
        },

        typeContinueAsGuestEmailAddress: function(guestEmailAddress) {
            return this.waitForElementVisible('@guestEmailAddress', 4000).setValue('@guestEmailAddress', guestEmailAddress);
        },

        clickGuestConfirmEmailAddress: function() {
            return this.waitForElementVisible('@guestConfirmEmailAddress', 4000).click('@guestConfirmEmailAddress');
        },

        typeGuestConfirmEmailAddress: function(creditCardNumber) {
            return this.waitForElementVisible('@guestConfirmEmailAddress', 4000).setValue('@guestConfirmEmailAddress', guestConfirmEmailAddress);
        },

        clickGuestUserContinueButton: function() {
            return this.waitForElementVisible('@guestUserContinueButton', 4000).click('@guestUserContinueButton');
        },

        //Checkout Page - Delivery Options

        clickAndCollectButton: function() {
            return this.waitForElementVisible('@clickAndCollectButton', 1000).click('@clickAndCollectButton');
        },

        homeDeliveryButton: function() {
            return this.waitForElementVisible('@homeDeliveryButton', 15000).click('@homeDeliveryButton');
        },

        //Checkout Page - Shipping Address Secton
        
        clickSavedAddressDropDown: function() {
            return this.waitForElementVisible('@savedAddressDropDown', 3000).click('@savedAddressDropDown');
        },

        selectFirstAddressOption: function() {
            return this.waitForElementVisible('@firstAddressOption', 1000).click('@firstAddressOption');
        },

        clickShippingSectionSaveAddressButton: function() {
            return this.waitForElementVisible('@shippingSectionSaveAddressButton', 1000).click('@shippingSectionSaveAddressButton');
        },

        clickShippingMethodDropDown: function() {
            return this.waitForElementVisible('@shippingMethodDropDown', 9000).click('@shippingMethodDropDown');
        },

        selectFirstShippingMethod: function() {
            return this.waitForElementVisible('@selectFirstShippingMethod', 1000).click('@selectFirstShippingMethod');
        },

        clickDeliveryTimeDropDown: function() {
            return this.waitForElementVisible('@deliveryTimeDropDown', 9000).click('@deliveryTimeDropDown');
        },

        selectFirstDeliveryTime: function() {
            return this.waitForElementVisible('@selectFirstDeliveryTime', 1000).click('@selectFirstDeliveryTime');
        },

        //Checkout Page - Contact Information

        useSameInformationAsShipping: function() {
            return this.waitForElementVisible('@useSameInformationAsShipping', 1000).click('@useSameInformationAsShipping');
        },

        clickSaveContactInformationButton: function() {
            return this.waitForElementVisible('@saveContactInformationButton', 1000).click('@saveContactInformationButton');
        },

        //Checkout Page - Payment Method Section

        clickCreditCardNumber: function() {
            return this.waitForElementVisible('@creditCardNumber', 4000).click('@creditCardNumber');
        },

        typeCreditCardNumber: function(creditCardNumber) {
            return this.waitForElementVisible('@creditCardNumber', 4000).setValue('@creditCardNumber', creditCardNumber);
        },

        clickExpirationDateMonth: function() {
            return this.waitForElementVisible('@expirationDateMonth', 3000).click('@expirationDateMonth');
        },

        selectFirstExpirationDateMonth: function() {
            return this.waitForElementVisible('@selectFirstMonth', 3000).click('@selectFirstMonth');
        },

        clickExpirationDateYear: function() {
            return this.waitForElementVisible('@expirationDateYear', 3000).click('@expirationDateYear');
        },

        selectFourthExpirationDateYear: function() {
            return this.waitForElementVisible('@selectFourthYear', 3000).click('@selectFourthYear');
        },

        clickCreditCardSecurityCode: function() {
            return this.waitForElementVisible('@creditCardSecurityCode', 3000).click('@creditCardSecurityCode');
        },

        typeCreditCardSecurityCode: function(creditCardSecurityCode) {
            return this.waitForElementVisible('@creditCardSecurityCode', 3000).setValue('@creditCardSecurityCode', creditCardSecurityCode);
        },      
        
        paymentMethodTermsConditionsCheckbox: function() {
            return this.waitForElementVisible('@paymentMethodTermsConditionsCheckbox', 3000).click('@paymentMethodTermsConditionsCheckbox');
        },

        paymentMethodPrivacyPolicyCheckbox: function() {
            return this.waitForElementVisible('@paymentMethodPrivacyPolicyCheckbox', 3000).click('@paymentMethodPrivacyPolicyCheckbox');
        },

        clickProceedToPaymentButton: function() {
            return this.waitForElementVisible('@proceedToPaymentButton', 3000).click('@proceedToPaymentButton');
        },
        

    }]
};