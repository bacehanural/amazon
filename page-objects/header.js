module.exports = {

    url: 'https://lego.c1xjddw2-majidalfu1-d1-public.model-t.cc.commerce.ondemand.com/',
    
    elements: {

        //Header Elements
        header: '.header',
        legoReflectContainer: '.SiteLogo > cx-banner > cx-generic-link > a',
        accountComponent: '.SiteTopHeaderRight .myAccount-Component .collapseButton',
        myBagDropDown: '.SiteTopHeaderRight .dropdown-toggle',
        guestOrderStatus: '.myAccount-Component div:first-child > div > div > .section-text > a',
        accountComponentDisplayedMail: '.myAccount-Component div:first-child .section-text > span',
        accountComponentProfileEdit: '.myAccount-Component div:first-child > div > div > .section-text > a',
        accountComponentOrderStatus: '.myAccount-Component div:nth-child(2) > div > div > .section-text > a',
        accountComponentLogInOut: '#btn-logout',
        acceptCookiesButton: '.btn-accept',
        
        accountSelectedTab: '.nav-wrapper.selected > app-custom-navigation-ui > div > app-cms-link-component > div > a',
        guestOrderStatusBreadcrumbOrderStatus: 'app-custom-breadcrumb > div > div.breadcrumb-title',


        searchMainPage: '#typeahead-http', //search field
        searchModal: 'input[type = "text"]',
        searchKeyword: '.dropdown-item:first-child ngb-highlight', //main searched keyword on suggestion list
        plpSearchResult: '.facetWrapper .for-search', //searched keyword on navigated PLP page 
        firstSearchResult: '#ngb-typeahead-0-1 > app-search-box-results-item > div',
        searchResultPDP: '.Summary > app-custom-product-intro > div > span',
        searchResultNoSearchResultPage: 'app-custom-no-search-result div:first-child > span > span',
        noSearchResultPageSearchField: 'cx-storefront > cx-page-layout #typeahead-http',
        noSearchResultPageSearch: 'cx-storefront > cx-page-layout input[type = "text"]',
        searchResultPLP: '.ProductLeftRefinements > app-custom-product-facet-navigation > .search-paginate > div > span',
        searchResultPLPKeyword: '.ProductLeftRefinements > app-custom-product-facet-navigation > .search-paginate > div > span > b',
        

        //Registered User - Sign In
        typeEmail: 'input[id = "email"]',
        typePassword: 'input[type = "password"]',
        signInButton: 'app-customer-login-flex div.row.row3 button',


        //Series Carousel Component
        firstCardShopNow: '.Section3 .carousel-inner > div:first-child > div:first-child .carousel-caption > a',
        secondCardShopNow: '.Section3 .carousel-inner > div:first-child > div:nth-child(2) .carousel-caption > a',
        thirdCardShopNow: '.Section3 .carousel-inner > div:first-child > div:nth-child(3) .carousel-caption > a',


        //PDP
        addToBagButton: '.Summary > app-custom-product-add-to-cart-component > .add-to-cart-wrapper > button',

        //Shopping Modal Page
        xButton: 'ngb-modal-window > div > div > app-add-to-bag-dialog > div.modal-header > button > span > cx-icon',
    },

    commands: [{

        checkInitialElements: function() {
            return (
              this.waitForElementVisible('@header', 1000)
              .waitForElementVisible('@legoReflectContainer', 1000)
                .waitForElementVisible('@accountComponent', 1000)
                .waitForElementVisible('@myBagDropDown', 1000)
            );
        },

        acceptCookies: function() {
            return this.waitForElementVisible('@acceptCookiesButton', 1000).click('@acceptCookiesButton');
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
        
        clickProfileEdit: function() {
            return this.waitForElementVisible('@accountComponentProfileEdit', 1000).click('@accountComponentProfileEdit');
        },

        clickOrderStatus: function() {
            return this.waitForElementVisible('@accountComponentOrderStatus', 1000).click('@accountComponentOrderStatus');
        },

        clickSearch: function() {
            return this.waitForElementVisible('@searchMainPage', 1000).click('@searchMainPage');
        },

        searchMainPage: function(mainQuery) {
            return this.waitForElementVisible('@searchModal', 1000).setValue('@searchModal', mainQuery);
        },

        clickSearchedKeyword: function() {
            return this.waitForElementVisible('@searchKeyword', 1000).click('@searchKeyword');
        },

        clickFirstSearchOption: function() {
            return this.waitForElementVisible('@firstSearchResult', 1000).click('@firstSearchResult');
        },

        clickNoSearchResultPageSearch: function() {
            return this.waitForElementVisible('@noSearchResultPageSearchField', 1000).click('@noSearchResultPageSearchField');
        },

        searchNoSearchResultPage: function(searchQuery) {
            return this.waitForElementVisible('@noSearchResultPageSearch', 1000).setValue('@noSearchResultPageSearch', searchQuery);
        },

        clickGuestOrderStatus: function(searchQuery) {
            return this.waitForElementVisible('@guestOrderStatus', 1000).click('@guestOrderStatus');
        },

        clickLogInOut: function() {
            return this.waitForElementVisible('@accountComponentLogInOut', 1000).click('@accountComponentLogInOut');
        },

        //Series Carousel Component Functions

        clickFirstCardShopNow: function() {
            return this.waitForElementVisible('@firstCardShopNow', 6000).click('@firstCardShopNow');
        },

        clickSecondCardShopNow: function() {
            return this.waitForElementVisible('@secondCardShopNow', 6000).click('@secondCardShopNow');
        },

        clickThirdCardShopNow: function() {
            return this.waitForElementVisible('@thirdCardShopNow', 6000).click('@thirdCardShopNow');
        },

         //PDP&Shopping Modal Page

         clickAddToBagButton: function() {
            return this.waitForElementVisible('@addToBagButton', 6000).click('@addToBagButton');
        },
        
        clickXModal: function() {
            return this.waitForElementVisible('@xButton', 4000).click('@xButton');
        },

        clickLegoReflectContainer: function() {
            return this.waitForElementVisible('@legoReflectContainer', 3000).click('@legoReflectContainer');
        },//Redirects to home page-lego brand button

  
    }]
};