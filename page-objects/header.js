module.exports = {

    url: 'https://lego.c1xjddw2-majidalfu1-d1-public.model-t.cc.commerce.ondemand.com/',
    
    elements: {

        //Header Elements
        header: '.header',
        legoReflectContainer: '.SiteLogo > cx-banner > cx-generic-link > a',
        accountComponent: '.SiteTopHeaderRight .myAccount-Component .collapseButton',
        myBagDropDown: '.SiteTopHeaderRight .dropdown-toggle',
        accountComponentDisplayedMail: '.SiteTopHeaderRight .collapse-menu .card-body #section-1 .my-auto div:nth-child(2) span',
        accountComponentProfileEdit: '#link-section-1',
        accountComponentOrderStatus: '#link-section-2',
        accountComponentVIP: '#link-section-3',
        accountComponentLogOut: '#btn-logout',
        acceptCookiesButton: '.btn-accept',


        searchMainPage: '#typeahead-http', //search field
        searchModal: 'input[type = "text"]',
        searchKeyword: '.dropdown-item:first-child ngb-highlight', //main searched keyword on suggestion list
        plpSearchResult: '.facetWrapper .for-search', //searched keyword on navigated PLP page 
        firstSearchResult: '#ngb-typeahead-0-1 > app-search-box-results-item > div',
        searchResultPDP: '.Summary > app-custom-product-intro > div > span',
        searchResultNoSearchResultPage: 'app-custom-no-search-result div:first-child > span > span',
        noSearchResultPageSearchField: 'cx-storefront > cx-page-layout #typeahead-http',
        noSearchResultPageSearch: 'cx-storefront > cx-page-layout input[type = "text"]',
        searchResultPLP: '.ProductLeftRefinements > app-custom-product-facet-navigation > .search-paginate > span',
        

        //Registered User - Sign In
        typeEmail: 'input[type = "email"]',
        typePassword: 'input[type = "password"]',
        signInButton: '.btn-block.btn-primary',
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

        clickAccount: function() {
            return this.waitForElementVisible('@accountComponent', 1000).click('@accountComponent');
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

        clickLegoLoyalty: function() {
            return this.waitForElementVisible('@accountComponentVIP', 1000).click('@accountComponentVIP');
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

        clickLogOut: function() {
            return this.waitForElementVisible('@accountComponentLogOut', 1000).click('@accountComponentLogOut');
        },
  
    }]
};