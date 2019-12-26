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
        addToBagButton: '.Summary > app-custom-product-add-to-cart-component > .add-to-cart-wrapper > button',

        //Shopping Modal Page
        xButton: 'ngb-modal-window > div > div > app-add-to-bag-dialog > div.modal-header > button > span > cx-icon',
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

        //Checkout Page Main Elements
        checkoutOrderSummaryOrderAmount: 'app-custom-checkout-order-summary > app-custom-order-summary > .cx-summary-partials > div:nth-child(6) > .cx-summary-amount',

        //Checkout Page - Store Location Section
        storeLocationStoreDropDown: 'app-custom-address app-pick-up div:first-child > ng-select',
        storeLocationFirstStore: 'app-custom-address app-pick-up div:first-child > ng-select ng-dropdown-panel > div > div:nth-child(2) > div:first-child > span',
        storeLocationFirstName: 'app-custom-address app-pick-up > form > div:first-child input[formcontrolname = "firstName"]',
        storeLocationLastName: 'app-custom-address app-pick-up > form > div:nth-child(2) input[formcontrolname = "lastName"]',
        storeLocationMobileNumber: 'app-custom-address app-pick-up > form > div:nth-child(3) input[formcontrolname = "cellphone"]',
        storeLocationSaveButton: 'app-custom-address app-pick-up > form > .cta-wrapper > div > div:first-child > button',

        //Checkout Page - Shipping Address Section
        savedAddressDropDown: '.flex-column > div > ng-select', //Registered&Addressed User
        firstAddressOption: '.flex-column > div > ng-select > ng-dropdown-panel > div > div:nth-child(2) > div:first-child', //Registered&Addressed User

        shippingSectionMobileNumber: 'app-custom-address > div > app-home-delivery input[formcontrolname = "cellphone"]',
        shippingSectionFirstName: 'app-custom-address > div > app-home-delivery input[formcontrolname = "firstName"]',
        shippingSectionLastName: 'app-custom-address > div > app-home-delivery input[formcontrolname = "lastName"]',
        shippingSectionSelectCountry: 'app-custom-address  app-home-delivery div:nth-child(5) > ng-select',
        shippingSelectFirstCountry: 'app-custom-address  app-home-delivery div:nth-child(5) > ng-select ng-dropdown-panel > div > div:nth-child(2) > div:first-child > span',
        shippingSectionSelectCity: 'app-custom-address app-home-delivery div:nth-child(6) > ng-select',
        shippingSelectFirstCity: 'app-custom-address app-home-delivery div:nth-child(6) > ng-select ng-dropdown-panel > div > div:nth-child(2) > div:first-child > span',
        shippingSectionSelectArea: 'app-custom-address app-home-delivery div:nth-child(7) > ng-select',
        shippingSelectFirstArea: 'app-custom-address app-home-delivery div:nth-child(7) > ng-select ng-dropdown-panel > div > div:nth-child(2) > div:first-child > span',
        shippingSectionSelectNeighborhood: 'app-custom-address app-home-delivery div:nth-child(8) > ng-select',
        shippingSelectFirstNeighborhood: 'app-custom-address app-home-delivery div:nth-child(8) > ng-select ng-dropdown-panel > div > div:nth-child(2) > div:first-child > span',
        shippingSectionStreet: 'app-custom-address > div > app-home-delivery input[formcontrolname = "streetname"]',
        shippingSectionBuilding: 'app-custom-address > div > app-home-delivery input[formcontrolname = "building"]',
        shippingSectionFloor: 'app-custom-address > div > app-home-delivery input[formcontrolname = "floor"]',
        shippingSectionAptNo: 'app-custom-address > div > app-home-delivery input[formcontrolname = "appartment"]',

        shippingSectionSaveAddressButton: 'app-home-delivery > form > .flex-column > div > div:first-child > button',
        shippingSectionCancelButton: 'app-home-delivery > form > .flex-column > div > div:nth-child(2) > button',
        shippingMethodDropDown: 'app-delivery > .delivery-mode-wrapper > .row > div > ng-select',
        selectFirstShippingMethod: 'app-delivery > .delivery-mode-wrapper > .row > div > ng-select > ng-dropdown-panel > div > div:nth-child(2) > div:first-child > span',
        deliveryTimeDropDown: '.delivery-time-wrapper > .row > div:first-child > ng-select > div',
        selectFirstDeliveryTime: '.delivery-time-wrapper > .row > div:first-child > ng-select > ng-dropdown-panel > div > div:nth-child(2) > div:first-child > span',

        //Checkout Page - Billing Information Section
        billingSectionMobileNumber: 'app-custom-contact-information form div:nth-child(2) input[formcontrolname = "cellphone"]',
        billingSectionFirstName: 'app-custom-contact-information form div:nth-child(3) input[formcontrolname = "firstName"]',
        billingSectionLastName: 'app-custom-contact-information form div:nth-child(4) input[formcontrolname = "lastName"]',
        billingSectionSelectCountry: 'app-custom-contact-information form div:nth-child(5) > ng-select',
        billingSectionFirstCountry: 'app-custom-contact-information form div:nth-child(5) > ng-select ng-dropdown-panel > div > div:nth-child(2) > div:first-child > span',
        billingSectionSelectCity: 'app-custom-contact-information form div:nth-child(6) > ng-select',
        billingSectionFirstCity: 'app-custom-contact-information form div:nth-child(6) > ng-select ng-dropdown-panel > div > div:nth-child(2) > div:first-child > span',
        billingSectionSelectArea: 'app-custom-contact-information form div:nth-child(7) > ng-select',
        billingSectionFirstArea: 'app-custom-contact-information form div:nth-child(7) > ng-select ng-dropdown-panel > div > div:nth-child(2) > div:first-child > span',
        billingSectionSelectNeighborhood: 'app-custom-contact-information form div:nth-child(8) > ng-select',
        billingSectionFirstNeighborhood: 'app-custom-contact-information form div:nth-child(8) > ng-select ng-dropdown-panel > div > div:nth-child(2) > div:first-child > span',
        billingSectionStreet: 'app-custom-contact-information form div:nth-child(9) input[formcontrolname = "streetname"]',
        billingSectionBuilding: 'app-custom-contact-information form div:nth-child(10) input[formcontrolname = "building"]',
        billingSectionFloor: 'app-custom-contact-information form div:nth-child(11) input[formcontrolname = "floor"]',
        billingSectionAptNumber: 'app-custom-contact-information form div:nth-child(12) input[formcontrolname = "appartment"]',
        saveBillingDetailsButton: 'app-custom-contact-information form > .flex-column > div > div:first-child > button',

        
        //Checkout Page - Contact Information
        useSameInformationAsShipping: 'app-custom-contact-information > div > div > div > label > span',
        saveContactInformationButton: 'app-custom-contact-information > div > form > .flex-column > div > div:first-child > button',
        contactInformationCancelButton: 'app-custom-contact-information > div > form > .flex-column > div > div:nth-child(2) > button',

        //Checkout Page - Payment Method Section
        creditCardNumber: 'input[formcontrolname = "cardNumber"]',
        expirationDateMonth: 'app-custom-payment-method-component div:first-child div:nth-child(2) div:first-child > ng-select',
        selectFirstMonth: 'app-custom-payment-method-component div:first-child div:nth-child(2) div:first-child > ng-select > ng-dropdown-panel > div > div:nth-child(2) > div:first-child',
        expirationDateYear: 'app-custom-payment-method-component div:first-child div:nth-child(2)  div:nth-child(2) > ng-select > div > div',
        selectFourthYear: 'app-custom-payment-method-component div:first-child div:nth-child(2)  div:nth-child(2) > ng-select > ng-dropdown-panel > div > div:nth-child(2) > div:nth-child(4)',
        creditCardSecurityCode: 'input[formcontrolname = "cvn"]',
        paymentMethodTermsConditionsCheckbox: 'app-custom-payment-method-component div > div:first-child div:nth-child(3) > div span',
        paymentMethodPrivacyPolicyCheckbox: 'app-custom-payment-method-component div > div:first-child div:nth-child(4) > div span',
        proceedToPaymentButton: 'app-custom-payment-method-component > app-payment-form > div > .cx-checkout-btns > div > button',     

        //Order Confirmation Page
        orderConfirmationBreadcrumb: 'app-custom-breadcrumb > div > div > div:nth-child(2)',
        orderConfirmationThankYouOrderNumber: 'app-custom-thank-you-message > .thank-you > .thank-you-desc > .thank-you-desc-order > .order-code',
        orderConfirmationThankYouEmail: 'app-custom-thank-you-message > .thank-you > .thank-you-desc > .thank-you-desc-email > .order-email',
        orderConfirmationReceiptTotalAmount: 'app-custom-order-totals > .order-total-section > .order-totals > .order-total-box > .total > .total-value',

    },

    commands: [{

        //Main Functions

        acceptCookies: function() {
            return this.waitForElementVisible('@acceptCookiesRibbon', 10000000).click('@acceptCookiesRibbon');
        },

        clickLogInOut: function() {
            return this.waitForElementVisible('@logInOutButton', 3000).click('@logInOutButton');
        },
        
        typeEmail: function(email) {
            return this.waitForElementVisible('@typeEmail', 3000).setValue('@typeEmail', email);
        },

        typePassword: function(password) {
            return this.waitForElementVisible('@typePassword', 3000).setValue('@typePassword', password);
        },

        clickSignInButton: function() {
            return this.waitForElementVisible('@signInButton', 10000).click('@signInButton');
        },

        clickLegoReflectContainer: function() {
            return this.waitForElementVisible('@legoReflectContainer', 3000).click('@legoReflectContainer');
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
            return this.waitForElementVisible('@firstCardShopNow', 6000).click('@firstCardShopNow');
        },

        clickSecondCardShopNow: function() {
            return this.waitForElementVisible('@secondCardShopNow', 6000).click('@secondCardShopNow');
        },

        clickThirdCardShopNow: function() {
            return this.waitForElementVisible('@thirdCardShopNow', 1000).click('@thirdCardShopNow');
        },


        //PDP&Shopping Modal Page

        clickAddToBagButton: function() {
            return this.waitForElementVisible('@addToBagButton', 3000).click('@addToBagButton');
        },
        
        clickXModal: function() {
            return this.waitForElementVisible('@xButton', 4000).click('@xButton');
        },

        clickRemoveButton: function() {
            return this.waitForElementVisible('@removeButton', 3000).click('@removeButton');
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

        typeGuestConfirmEmailAddress: function(guestConfirmEmailAddress) {
            return this.waitForElementVisible('@guestConfirmEmailAddress', 4000).setValue('@guestConfirmEmailAddress', guestConfirmEmailAddress);
        },

        clickGuestUserContinueButton: function() {
            return this.waitForElementVisible('@guestUserContinueButton', 4000).click('@guestUserContinueButton');
        },

        //Checkout Page - Delivery Options

        clickAndCollectButton: function() {
            return this.waitForElementVisible('@clickAndCollectButton', 9000).click('@clickAndCollectButton');
        },

        homeDeliveryButton: function() {
            return this.waitForElementVisible('@homeDeliveryButton', 15000).click('@homeDeliveryButton');
        },

        //Checkout Page Main Elements

        checkoutOrderSummaryOrderAmount: function(){
            return this.waitForElementVisible('@checkoutOrderSummaryOrderAmount', 15000);
        },

        //Checkout Page - Store Location Section

        clickStoreLocationStoreDropDown: function() {
            return this.waitForElementVisible('@storeLocationStoreDropDown', 3000).click('@storeLocationStoreDropDown');
        },

        selectStoreLocationFirstStore: function() {
            return this.waitForElementVisible('@storeLocationFirstStore', 3000).click('@storeLocationFirstStore');
        },

        clickStoreLocationFirstName: function() {
            return this.waitForElementVisible('@storeLocationFirstName', 4000).click('@storeLocationFirstName');
        },

        typeStoreLocationFirstName: function(storeLocationFirstName) {
            return this.waitForElementVisible('@storeLocationFirstName', 4000).setValue('@storeLocationFirstName', storeLocationFirstName);
        },

        clickStoreLocationLastName: function() {
            return this.waitForElementVisible('@storeLocationLastName', 4000).click('@storeLocationLastName');
        },

        typeStoreLocationLastName: function(storeLocationLastName) {
            return this.waitForElementVisible('@storeLocationLastName', 4000).setValue('@storeLocationLastName', storeLocationLastName);
        },

        clickStoreLocationMobileNumber: function() {
            return this.waitForElementVisible('@storeLocationMobileNumber', 4000).click('@storeLocationMobileNumber');
        },

        typeStoreLocationMobileNumber: function(storeLocationMobileNumber) {
            return this.waitForElementVisible('@storeLocationMobileNumber', 4000).setValue('@storeLocationMobileNumber', storeLocationMobileNumber);
        },

        clickStoreLocationSaveButton: function() {
            return this.waitForElementVisible('@storeLocationSaveButton', 4000).click('@storeLocationSaveButton');
        },


        //Checkout Page - Shipping Address Section
        
        clickSavedAddressDropDown: function() {
            return this.waitForElementVisible('@savedAddressDropDown', 3000).click('@savedAddressDropDown');
        },

        selectFirstAddressOption: function() {
            return this.waitForElementVisible('@firstAddressOption', 3000).click('@firstAddressOption');
        },


        clickShippingSectionMobileNumber: function() {
            return this.waitForElementVisible('@shippingSectionMobileNumber', 4000).click('@shippingSectionMobileNumber');
        },

        typeShippingSectionMobileNumber: function(shippingSectionMobileNumber) {
            return this.waitForElementVisible('@shippingSectionMobileNumber', 4000).setValue('@shippingSectionMobileNumber', shippingSectionMobileNumber);
        },

        clickShippingSectionFirstName: function() {
            return this.waitForElementVisible('@shippingSectionFirstName', 4000).click('@shippingSectionFirstName');
        },

        typeShippingSectionFirstName: function(shippingSectionFirstName) {
            return this.waitForElementVisible('@shippingSectionFirstName', 4000).setValue('@shippingSectionFirstName', shippingSectionFirstName);
        },

        clickShippingSectionLastName: function() {
            return this.waitForElementVisible('@shippingSectionLastName', 4000).click('@shippingSectionLastName');
        },

        typeShippingSectionLastName: function(shippingSectionLastName) {
            return this.waitForElementVisible('@shippingSectionLastName', 4000).setValue('@shippingSectionLastName', shippingSectionLastName);
        },

        clickShippingSectionSelectCountry: function() {
            return this.waitForElementVisible('@shippingSectionSelectCountry', 4000).click('@shippingSectionSelectCountry');
        },

        clickShippingSelectFirstCountry: function() {
            return this.waitForElementVisible('@shippingSelectFirstCountry', 4000).click('@shippingSelectFirstCountry');
        },

        clickShippingSectionSelectCity: function() {
            return this.waitForElementVisible('@shippingSectionSelectCity', 4000).click('@shippingSectionSelectCity');
        },

        clickShippingSelectFirstCity: function() {
            return this.waitForElementVisible('@shippingSelectFirstCity', 4000).click('@shippingSelectFirstCity');
        },

        clickShippingSectionSelectArea: function() {
            return this.waitForElementVisible('@shippingSectionSelectArea', 4000).click('@shippingSectionSelectArea');
        },

        clickShippingSelectFirstArea: function() {
            return this.waitForElementVisible('@shippingSelectFirstArea', 4000).click('@shippingSelectFirstArea');
        },
        
        clickShippingSectionSelectNeighborhood: function() {
            return this.waitForElementVisible('@shippingSectionSelectNeighborhood', 4000).click('@shippingSectionSelectNeighborhood');
        },

        clickShippingSelectFirstNeighborhood: function() {
            return this.waitForElementVisible('@shippingSelectFirstNeighborhood', 4000).click('@shippingSelectFirstNeighborhood');
        },

        clickShippingSectionStreet: function() {
            return this.waitForElementVisible('@shippingSectionStreet', 4000).click('@shippingSectionStreet');
        },

        typeShippingSectionStreet: function(shippingSectionStreet) {
            return this.waitForElementVisible('@shippingSectionStreet', 4000).setValue('@shippingSectionStreet', shippingSectionStreet);
        },

        clickShippingSectionBuilding: function() {
            return this.waitForElementVisible('@shippingSectionBuilding', 4000).click('@shippingSectionBuilding');
        },

        typeShippingSectionBuilding: function(shippingSectionBuilding) {
            return this.waitForElementVisible('@shippingSectionBuilding', 4000).setValue('@shippingSectionBuilding', shippingSectionBuilding);
        },

        clickShippingSectionFloor: function() {
            return this.waitForElementVisible('@shippingSectionFloor', 4000).click('@shippingSectionFloor');
        },

        typeShippingSectionFloor: function(shippingSectionFloor) {
            return this.waitForElementVisible('@shippingSectionFloor', 4000).setValue('@shippingSectionFloor', shippingSectionFloor);
        },

        clickShippingSectionAptNo: function() {
            return this.waitForElementVisible('@shippingSectionAptNo', 4000).click('@shippingSectionAptNo');
        },

        typeShippingSectionAptNo: function(shippingSectionAptNo) {
            return this.waitForElementVisible('@shippingSectionAptNo', 4000).setValue('@shippingSectionAptNo', shippingSectionAptNo);
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



        //Checkout Page - Billing Information Section

        clickBillingSectionMobileNumber: function() {
            return this.waitForElementVisible('@billingSectionMobileNumber', 4000).click('@billingSectionMobileNumber');
        },

        typeBillingSectionMobileNumber: function(billingSectionMobileNumber) {
            return this.waitForElementVisible('@billingSectionMobileNumber', 4000).setValue('@billingSectionMobileNumber', billingSectionMobileNumber);
        },

        clickBillingSectionFirstName: function() {
            return this.waitForElementVisible('@billingSectionFirstName', 4000).click('@billingSectionFirstName');
        },

        typeBillingSectionFirstName: function(billingSectionFirstName) {
            return this.waitForElementVisible('@billingSectionFirstName', 4000).setValue('@billingSectionFirstName', billingSectionFirstName);
        },

        clickBillingSectionLastName: function() {
            return this.waitForElementVisible('@billingSectionLastName', 4000).click('@billingSectionLastName');
        },

        typeBillingSectionLastName: function(billingSectionLastName) {
            return this.waitForElementVisible('@billingSectionLastName', 4000).setValue('@billingSectionLastName', billingSectionLastName);
        },

        clickBillingSectionSelectCountry: function() {
            return this.waitForElementVisible('@billingSectionSelectCountry', 4000).click('@billingSectionSelectCountry');
        },

        selectBillingSectionFirstCountry: function() {
            return this.waitForElementVisible('@billingSectionFirstCountry', 4000).click('@billingSectionFirstCountry');
        },

        clickBillingSectionSelectCity: function() {
            return this.waitForElementVisible('@billingSectionSelectCity', 4000).click('@billingSectionSelectCity');
        },

        selectBillingSectionFirstCity: function() {
            return this.waitForElementVisible('@billingSectionFirstCity', 4000).click('@billingSectionFirstCity');
        },

        clickBillingSectionSelectArea: function() {
            return this.waitForElementVisible('@billingSectionSelectArea', 4000).click('@billingSectionSelectArea');
        },

        selectBillingSectionFirstArea: function() {
            return this.waitForElementVisible('@billingSectionFirstArea', 4000).click('@billingSectionFirstArea');
        },

        clickBillingSectionSelectNeighborhood: function() {
            return this.waitForElementVisible('@billingSectionSelectNeighborhood', 4000).click('@billingSectionSelectNeighborhood');
        },

        selectBillingSectionFirstNeighborhood: function() {
            return this.waitForElementVisible('@billingSectionFirstNeighborhood', 4000).click('@billingSectionFirstNeighborhood');
        },

        clickBillingSectionStreet: function() {
            return this.waitForElementVisible('@billingSectionStreet', 4000).click('@billingSectionStreet');
        },

        typeBillingSectionStreet: function(billingSectionStreet) {
            return this.waitForElementVisible('@billingSectionStreet', 4000).setValue('@billingSectionStreet', billingSectionStreet);
        },

        clickBillingSectionBuilding: function() {
            return this.waitForElementVisible('@billingSectionBuilding', 4000).click('@billingSectionBuilding');
        },

        typeBillingSectionBuilding: function(billingSectionBuilding) {
            return this.waitForElementVisible('@billingSectionBuilding', 4000).setValue('@billingSectionBuilding', billingSectionBuilding);
        },

        clickBillingSectionFloor: function() {
            return this.waitForElementVisible('@billingSectionFloor', 4000).click('@billingSectionFloor');
        },

        typeBillingSectionFloor: function(billingSectionFloor) {
            return this.waitForElementVisible('@billingSectionFloor', 4000).setValue('@billingSectionFloor', billingSectionFloor);
        },

        clickBillingSectionAptNumber: function() {
            return this.waitForElementVisible('@billingSectionAptNumber', 4000).click('@billingSectionAptNumber');
        },

        typeBillingSectionAptNumber: function(billingSectionAptNumber) {
            return this.waitForElementVisible('@billingSectionAptNumber', 4000).setValue('@billingSectionAptNumber', billingSectionAptNumber);
        },

        clickSaveBillingDetailsButton: function() {
            return this.waitForElementVisible('@saveBillingDetailsButton', 4000).click('@saveBillingDetailsButton');
        },


        //Checkout Page - Contact Information

        useSameInformationAsShipping: function() {
            return this.waitForElementVisible('@useSameInformationAsShipping', 4000).click('@useSameInformationAsShipping');
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
            return this.waitForElementVisible('@proceedToPaymentButton', 9000).click('@proceedToPaymentButton');
        },

        //Order Confirmation Page 

        checkOrderConfirmationBreadcrumb: function(){
            return this.waitForElementVisible('@orderConfirmationBreadcrumb', 15000);
        },

        checkOrderConfirmationThankYouOrderNmb: function(){
            return this.waitForElementVisible('@orderConfirmationThankYouOrderNumber', 15000);
        },

        checkOrderConfirmationThankYouEmail: function(){
            return this.waitForElementVisible('@orderConfirmationThankYouEmail', 15000);
        },

        checkOrderConfirmationReceiptTotalAmount: function(){
            return this.waitForElementVisible('@orderConfirmationReceiptTotalAmount', 15000);
        },

    }]
};