module.exports = {

    url: 'https://www.lidyana.com/',
    
    elements: {

        //Main Page Elements
        lidyanaLogo: '.header-logo',
        search: '.search-box input[id = "query"]',
        login: '.site-header-v2 > div:nth-child(4) nav .user-nav-login',
        wishlist: '.site-header-v2 > div:nth-child(4) nav .wishlist-icon',
        shoppingBag: '.site-header-v2 > div:nth-child(4) nav .user-nav-cart',



        //Cookies
        acceptCookiesRibbon: '.cookie-warning-close',



        //Login
        typeEmail: 'nav:nth-child(2) .header-dropdown input[id = "topLogin_email"]',
        typePassword: 'nav:nth-child(2) .header-dropdown input[id = "topLogin_password"]',
        signInButton: 'nav:nth-child(2) .header-dropdown .btn-submit',



        //My Profile Drop-Down List Box
        contactDetails: 'div:nth-child(4) .user-nav-login .header-dropdown a:first-child',
        logout: 'div:nth-child(4) .user-nav-login .header-dropdown a:nth-child(3)',



        //Contact Information
        emailValidation: '.account-content .validate > div:nth-child(3) > input[value="burcuacehanural@yopmail.com"]',
        myAccountMenuBar: '.account-content h1',
        myAccountField: '.account-sidebar p',



        //Search
        searchOptionFirstCategory: '.search-box .search-suggestions .category-suggestion li:first-child',



        //Product Listing Page
        categoryBreadcrumb: '.urlTitle',
        categoryHeader: '.category-title-content .category-title',
        


        //Product Detail Page
        productCardFirstProductPLP: 'li:first-child .product-list-link',
        addToBagButtonPDP: '.btn-primary.eventAddToCart',
        


        //Wishlist
        firstProductPLPWishlistIcon: 'div:nth-child(4) li:first-child .product-list-fav',
        wishlistFirstProduct: '.products.type2 > ul:first-child > .product-list-item:first-child',
        continueShoppingButtonWishlistPage: '.wishlist-header.empty-wishlist .btn-primary',
        firstProductWishlistPageWishlistIcon: 'li:first-child .product-list-fav',


        
        //Modal Page
        modalPageOk: '.modal-footer .btn-primary',



        //Newsletter
        womanRadioButton: 'input[id="womanFooter"]',
        newsletterEmail: 'input[id="footerEmail"]',
        newsletterSubmitButton: '.input-group-btn',
        modalPage: '.modal.scrollable',



        //Shopping Bag
        submitShoppingBag: '.button-normal',
        checkoutButton: '.cart-nav-buttons .btn-primary',



        //Checkout Page
        shippingAddressDropDownListBox: 'div:first-child > div:nth-child(2) > div:first-child > select',



        //My Addresses
        addressesMenuBar: '.account-sidebar nav li:nth-child(14)',
        newAddressButton: '.account-content .account-new-address',
        addressTitle: '.account-content input[id="alias"]',
        addressFirstName: '.account-content input[id="name"]',
        addressLastName: '.account-content input[id="lastname"]',
        addressPhoneNumber: '.account-content input[id="phone"]',
        addressAddress: '.account-content textarea[id="address"]',
        addressCountry: '.account-content select[id="country_code"]',
        selectAddressCountry: '.account-content select[id="country_code"] option:nth-child(208)',
        addressCity: '.account-content select[id="city_id"]',
        selectAddressCity: '.account-content select[id="city_id"] option:nth-child(4)',
        addressDistrict: '.account-content select[id="district_id"]',
        selectAddressDistrict: '.account-content select[id="district_id"] option:nth-child(23)',
        addressPostCode: '.account-content input[id="postal_code"]',
        addNewAddressButton: '.address-form-buttons .btn-primary',
        deleteAddedAddress: '.account-address-wrap > div:first-child > div > button[type="button"]',
        
        addressDeleteButton: '.account-address-box-buttons button[type="button"]',
        addressUpdateButton: '.account-address-box-buttons > a',
        newlyCreatedAddressWholeField: '.account-address-box',
        newlyCreatedAddressDisplay: '.account-address-box .overflow',
        recipientNameDisplay: '.account-address-box strong',
        addressRegionDisplay: '.account-address-box p:nth-child(3)',
        phoneNumberAddressDisplay: '.account-address-box p:nth-child(4)',



        //Checkout Page

        creditCardName: 'input[id="cc_name"]',
        creditCardNo: 'input[id="cc_no"]',
        creditCardExpirationMonth: '.checkv4__select.left-col',
        creditCardExpirationJanuary: '.checkv4__select.left-col option:nth-child(2)',
        creditCardExpirationYear: '.checkv4__select.right-col',
        creditCardExpirationYearSecond: '.checkv4__select.right-col option:nth-child(4)',
        creditCardSecurityNumber: 'input[id="cc_cvc"]',
        proceedPaymentButton: '.checkv4-buy.desktop-only .btn-primary',

    },

    

    commands: [{

        //Initials

        checkInitialElements: function() {
            return (
              this.waitForElementVisible('@lidyanaLogo', 1000)
                .waitForElementVisible('@search', 1000)
                .waitForElementVisible('@login', 1000)
                .waitForElementVisible('@wishlist', 1000)
                .waitForElementVisible('@shoppingBag', 1000)
            );
        },



        //Newly Created Address Validation

        myAddressFieldValidation: function() {
            return (
              this.waitForElementVisible('@addressDeleteButton', 1000)
                .waitForElementVisible('@addressUpdateButton', 1000)
                .waitForElementVisible('@newlyCreatedAddressWholeField', 1000)
                .waitForElementVisible('@newlyCreatedAddressDisplay', 1000)
                .waitForElementVisible('@recipientNameDisplay', 1000)
                .waitForElementVisible('@addressRegionDisplay', 1000)
                .waitForElementVisible('@phoneNumberAddressDisplay', 1000)
            );
        },



        //Newly Created Address Assertion

        myAddressFieldAssertions: function() {
            return (
              this.assert.elementPresent('@addressDeleteButton')
                .assert.elementPresent('@addressUpdateButton')
                .assert.elementPresent('@newlyCreatedAddressWholeField')
                .assert.elementPresent('@newlyCreatedAddressDisplay')
                .assert.elementPresent('@recipientNameDisplay')
                .assert.elementPresent('@addressRegionDisplay')
                .assert.elementPresent('@phoneNumberAddressDisplay')
            );
        },


        //Main Functions
        
        acceptCookies: function() {
            return this.waitForElementVisible('@acceptCookiesRibbon', 4000).click('@acceptCookiesRibbon');
        },

        clickLogin: function() {
            return this.waitForElementVisible('@login', 1000).click('@login');
        },

        typeEmail: function(email) {
            return this.waitForElementVisible('@typeEmail', 1000).setValue('@typeEmail', email);
        },

        typePassword: function(password) {
            return this.waitForElementVisible('@typePassword', 1000).setValue('@typePassword', password);
        },

        clickSignInButton: function() {
            return this.waitForElementVisible('@signInButton', 1000).click('@signInButton');
        },



        //Profile Functions

        clickAccountInformation: function() {
            return this.waitForElementVisible('@contactDetails', 1000).click('@contactDetails');
        },



        //Logout Function

        clickLogout: function() {
            return this.waitForElementVisible('@logout', 1000).click('@logout');
        },



        //Search Functions

        clickSearch: function() {
            return this.waitForElementVisible('@search', 1000).click('@search');
        },

        searchMainPage: function(mainQuery) {
            return this.waitForElementVisible('@search', 1000).setValue('@search', mainQuery);
        },

        clickSearchOptionFirstCategory: function() {
            return this.waitForElementVisible('@searchOptionFirstCategory', 1000).click('@searchOptionFirstCategory');
        },



        //Wishlist Functions

        clickFirstProductPLPWishlistIcon: function() {
            return this.waitForElementVisible('@firstProductPLPWishlistIcon', 2000).click('@firstProductPLPWishlistIcon');
        },


        clickFirstProductWishlistPageWishlistIcon: function() {
            return this.waitForElementVisible('@firstProductWishlistPageWishlistIcon', 2000).click('@firstProductWishlistPageWishlistIcon');
        },


        clickWishlistIcon: function() {
            return this.waitForElementVisible('@wishlist', 3000).click('@wishlist');
        },
        


        //Modal Page Functions

        clickModalPageOk: function() {
            return this.waitForElementVisible('@modalPageOk', 1000).click('@modalPageOk');
        },



        //Newsletter Functions

        clickWomanRadioButton: function() {
            return this.waitForElementVisible('@womanRadioButton', 1000).click('@womanRadioButton');
        },

        typeNewsletterEmail: function(newsletterEmail) {
            return this.waitForElementVisible('@newsletterEmail', 1000).setValue('@newsletterEmail', newsletterEmail);
        },

        clickNewsletterSubmit: function() {
            return this.waitForElementVisible('@newsletterSubmitButton', 1000).click('@newsletterSubmitButton');
        },



        //My Addresses Functions
        
        clickAddressMenuBar: function() {
            return this.waitForElementVisible('@addressesMenuBar', 1000).click('@addressesMenuBar');
        },

        clickNewAddress: function() {
            return this.waitForElementVisible('@newAddressButton', 1000).click('@newAddressButton');
        },

        typeAddressTitle: function(addressTitle) {
            return this.waitForElementVisible('@addressTitle', 1000).setValue('@addressTitle', addressTitle);
        },      

        typeAddressFirstName: function(addressFirstName) {
            return this.waitForElementVisible('@addressFirstName', 1000).setValue('@addressFirstName', addressFirstName);
        },

        typeAddressLastName: function(addressLastName) {
            return this.waitForElementVisible('@addressLastName', 1000).setValue('@addressLastName', addressLastName);
        },

        typeAddressPhoneNumber: function(addressPhoneNumber) {
            return this.waitForElementVisible('@addressPhoneNumber', 1000).setValue('@addressPhoneNumber', addressPhoneNumber);
        },

        typeAddressAddress: function(addressAddress) {
            return this.waitForElementVisible('@addressAddress', 1000).setValue('@addressAddress', addressAddress);
        },

        clickAddressCountry: function() {
            return this.waitForElementVisible('@addressCountry', 1000).click('@addressCountry');
        },

        selectAddressCountry: function() {
            return this.waitForElementVisible('@selectAddressCountry', 1000).click('@selectAddressCountry');
        },

        clickAddressCity: function() {
            return this.waitForElementVisible('@addressCity', 1000).click('@addressCity');
        },

        selectAddressCity: function() {
            return this.waitForElementVisible('@selectAddressCity', 1000).click('@selectAddressCity');
        },

        clickAddressDistrict: function() {
            return this.waitForElementVisible('@addressDistrict', 1000).click('@addressDistrict');
        },

        selectAddressDistrict: function() {
            return this.waitForElementVisible('@selectAddressDistrict', 1000).click('@selectAddressDistrict');
        },

        typeAddressPostCode: function(addressPostCode) {
            return this.waitForElementVisible('@addressPostCode', 1000).setValue('@addressPostCode', addressPostCode);
        },

        clickAddressSubmitButton: function() {
            return this.waitForElementVisible('@addNewAddressButton', 1000).click('@addNewAddressButton');
        },


        clickAddressDeleteButton: function() {
            return this.waitForElementVisible('@deleteAddedAddress', 1000).click('@deleteAddedAddress');
        },


        clickAddressModalPageDelete: function() {
            return this.waitForElementVisible('@modalPageOk', 1000).click('@modalPageOk');
        },



        //ProductDetailPage

        clickFirstProductPLP: function() {
            return this.waitForElementVisible('@productCardFirstProductPLP', 1000).click('@productCardFirstProductPLP');
        },

        clickAddToBag: function() {
            return this.waitForElementVisible('@addToBagButtonPDP', 1000).click('@addToBagButtonPDP');
        },    
        
        clickShoppingBag: function() {
            return this.waitForElementVisible('@shoppingBag', 1000).click('@shoppingBag');
        },



        //Shopping Bag Functionality

        clickApproveShoppingBag: function() {
            return this.waitForElementVisible('@submitShoppingBag', 1000).click('@submitShoppingBag');
        },


        clickCheckoutButton: function() {
            return this.waitForElementVisible('@checkoutButton', 1000).click('@checkoutButton');
        },



        //Checkout Page Functionality

        clickShippingAddress: function() {
            return this.waitForElementVisible('@shippingAddressDropDownListBox', 1000).click('@shippingAddressDropDownListBox');
        },


        typeCreditCardName: function(creditCardName) {
            return this.waitForElementVisible('@creditCardName', 1000).setValue('@creditCardName', creditCardName);
        },


        typeCreditCardNo: function(creditCardNo) {
            return this.waitForElementVisible('@creditCardNo', 1000).setValue('@creditCardNo', creditCardNo);
        },


        clickCreditCardExpirationMonth: function() {
            return this.waitForElementVisible('@creditCardExpirationMonth', 1000).click('@creditCardExpirationMonth');
        },


        selectCreditCardExpirationJanuary: function() {
            return this.waitForElementVisible('@creditCardExpirationJanuary', 1000).click('@creditCardExpirationJanuary');
        },

        
        clickCreditCardExpirationYear: function() {
            return this.waitForElementVisible('@creditCardExpirationYear', 1000).click('@creditCardExpirationYear');
        },


        selectCreditCardExpirationSecond: function() {
            return this.waitForElementVisible('@creditCardExpirationYearSecond', 1000).click('@creditCardExpirationYearSecond');
        },


        typeCvv: function(cvv) {
            return this.waitForElementVisible('@creditCardSecurityNumber', 1000).setValue('@creditCardSecurityNumber', cvv);
        },


        clickCheckoutSubmitButton: function() {
            return this.waitForElementVisible('@proceedPaymentButton', 1000).click('@proceedPaymentButton');
        },

    }]
};