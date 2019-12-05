module.exports = {

    url: 'https://lego.c1xjddw2-majidalfu1-d1-public.model-t.cc.commerce.ondemand.com/',
    
    elements: {

        //Main Page Elements-Cookies Ribbon
        acceptCookiesRibbon: '.btn-accept',
        cookiesSettingsRibbon: '.btn-white',
        cookiesRibbon: '.cookies.text-white',

        //Account
        signIn: '.SiteTopHeaderRight .myAccount-Component > div > button',
        typeEmail: 'input[type = "email"]',
        typePassword: 'input[type = "password"]',
        signInButton: '.btn-block.btn-primary',

        //Main Page Elements-Carousel Component
        carouselComponent: '.Section1 .slide:first-child',
        carouselDescription : '.Section1 .slide:first-child .RIGHT > p',
        carouselShopNowButton : '.Section1 .slide:first-child .btn-primary',
        carouselNext : '.Section1 .next',
        carouselPrev : '.Section1 .previous',
        carouselFirstDot : '.Section1 .indicators > button:first-child',

        //Series Carousel Component
        productCarousel : '.Section3 .carousel',
        firstCardTitle: '.Section3 .carousel-inner > div:first-child > div:first-child .carousel-caption > h3',
        firstCardShopNow: '.Section3 .carousel-inner > div:first-child > div:first-child .carousel-caption > a',
        secondCardTitle: '.Section3 .carousel-inner > div:first-child > div:nth-child(2) .carousel-caption > h3',
        secondCardShopNow: '.Section3 .carousel-inner > div:first-child > div:nth-child(2) .carousel-caption > a',
        thirdCardTitle: '.Section3 .carousel-inner > div:first-child > div:nth-child(3) .carousel-caption > h3',
        thirdCardShopNow: '.Section3 .carousel-inner > div:first-child > div:nth-child(3) .carousel-caption > a',

        //Themes Component
        themesComponent: '.theme-carousel-wrapper:first-child',
        themesSeeMoreMainPage: '.Section2C > app-themes-carousel > div > div > div > a',
        themesPageSorting: '.TopCategory > app-custom-themes-listing > div > .sorting.column',
        themesFirstItemMainPage: '.theme-carousel-wrapper:first-child .item-wrapper:first-child a',
        themesSecondItemMainPage: '.theme-carousel-wrapper:first-child .item-wrapper:nth-child(2) a',
        themesThirdItemMainPage: '.theme-carousel-wrapper:first-child .item-wrapper:nth-child(3) a',
        themesFouthItemMainPage: '.theme-carousel-wrapper:first-child .item-wrapper:nth-child(4) a',

        //Explore Component
        exploreComponent: '.Section2C app-grid-layout:nth-child(2) > div',
        exploreFirstBannerInstructions: '.Section2C app-grid-layout:nth-child(2) > div > div > div:first-child > div .banner-img-wrapper',
        exploreFourthBannerIdea: '.Section2C app-grid-layout:nth-child(2) app-grid-layout > div > div > div:nth-child(3) .carousel-item',
        exploreFifthBannerCar: '.Section2C app-grid-layout:nth-child(2) app-grid-layout > div > div > div:nth-child(4) .carousel-item',

        //New Sets
        newSetsComponent: '.Section4 .category-carousel-wrapper',
        newSetsFirstCard: '.Section4 .carousel-item.active > div:first-child > a',
        newSetsSecondCard: '.Section4 .carousel-item.active > div:nth-child(2) > a',
        newSetsThirdCard: '.Section4 .carousel-item.active > div:nth-child(3) > a',
        newSetsSeeMoreMainPage: '.Section4 > app-product-carousel > div > div > div > div > a',

        //Non-Product Page Elements
        firstMegaDropDown: '.NavigationBar .navWrapper > div:first-child > button',
        firstMegaFirstItem:'app-header-mega-dropdown .navWrapper > div:first-child > div > div > div > div > div.col-10.collapse.show > div > div:first-child > div > app-custom-navigation-ui:first-child > div > app-cms-link-component > div > a',
        secondMegaDropDown: '.NavigationBar .navWrapper > div:nth-child(2) > button',
        secondMegaFirstItem: 'app-header-mega-dropdown > div.navWrapper > div:nth-child(2)  div:first-child > div > div > button',
        shopBySeeAll: 'app-header-mega-dropdown > div.navWrapper > div:nth-child(2) .see-all-wrapper.collapse.show > .collapse.show app-cms-link-component a',
        sixthMegaDropDown: '.NavigationBar .navWrapper > div:nth-child(6) > button',
        sixthMegaFirstItem: 'app-header-mega-dropdown div:nth-child(6) div:first-child > app-custom-navigation-ui:first-child app-cms-link-component  a',

        //Global Foooter Component
        guaranteeComponent: '.footer app-grid-layout app-grid-layout > div',
        newsletterComponent: '.footer-newsletter-general:first-child',
        followUsComponent: '.Footer > app-grid-layout:nth-child(3) > div',
        footerNavigation: '.navigation-footer-general:first-child',
        bottomWrapper: '.footer-bottom-wrapper:first-child',
        bottomWrapperLinks: '.footer-bottom-wrapper:first-child > div:first-child',
        cookiesSettings: 'app-custom-bottom-footer div:nth-child(3) > app-custom-navigation-ui > div > app-cms-link-component > div > a',

        //PLP
        sortByDropDownListBox: '.ProductListSlot > app-product-list cx-sorting > ng-select > div',
        sortBy: '.ProductListSlot > app-product-list cx-sorting',
        facetNavigationFilter: '.ProductLeftRefinements > app-custom-product-facet-navigation',
        results: '.ProductLeftRefinements > app-custom-product-facet-navigation .paginate-display',
        breadcrumb: 'app-custom-breadcrumb > div',
        facetFilterFirstOption: '.ProductLeftRefinements > app-custom-product-facet-navigation .flex-column:first-child > div:nth-child(3) > div:nth-child(2) #collapseExample1 div:first-child > label:first-child',
        resetAllButton: '.ProductLeftRefinements > app-custom-product-facet-navigation .flex-column:first-child > div:nth-child(3) > button',

        //my Bag
        legoReflectContainer: '.SiteLogo > cx-banner > cx-generic-link > a',
        miniCart: '#dropdownManual',
        miniCartDropDownMenu: '.SiteTopHeaderRight > app-mini-cart > div > div > div',
        addedFirstProduct: '#miniCart-0 div:first-child > div.col-8 > div',
        emptyBagHeader: '.EmptyCartMiddleContent > cx-paragraph > p > div',
        emptyBagFirstDescription: '.EmptyCartMiddleContent > cx-paragraph > p > h1',
        emptyBagGuestSecondDescription: '.EmptyCartMiddleContent > cx-paragraph > p > h2',
        emptyBagGuestSignIn: '.EmptyCartMiddleContent .btn-primary',
        emptyBagStartShopping: '.EmptyCartMiddleContent > cx-paragraph > p > a:nth-child(5)',

        //PDP
        productTitle: 'app-custom-product-intro > div > span',
        addToBagButton: '.add-to-cart-wrapper > button',

        //Shopping Cart
        xButton: 'ngb-modal-window  cx-added-to-cart-dialog div.cx-dialog-header.modal-header > button',

        //Subscribe-Newsletter Field
        typeYourEmailAddress: 'input[type = "email"]',
        subscribeButton: '.footer-newsletter-form-section > button',

        //Cookies Settings Page
        requiredCookiesRadioButton: 'app-cookie-settings-flex > div > div.row.option > label > input[type=radio]',
        functionalCookiesCheckBox: 'app-cookie-settings-flex > div > div:nth-child(2) > div:first-child > label',
        marketingCookiesCheckBox: 'app-cookie-settings-flex > div > div:nth-child(2) > div:nth-child(2) > label',
        saveButton: 'app-cookie-settings-flex > div > div:nth-child(2) > div.row.submit > button',
        cookieSettingsLink: 'cx-page-slot > cx-paragraph > p',
        privacyPollicyLink: 'cx-paragraph > p > a:first-child',
        cookiePolicyLink: 'cx-paragraph > p > a:nth-child(2)',
    },

    
    commands: [{

        //Initials

        checkCarouselInitialElements: function() {
            return (
              this.waitForElementVisible('@carouselComponent', 1000)
                .waitForElementVisible('@carouselDescription', 1000)
                .waitForElementVisible('@carouselShopNowButton', 1000)
                .waitForElementVisible('@carouselNext', 1000)
                .waitForElementVisible('@carouselPrev', 1000)
                .waitForElementVisible('@carouselFirstDot', 1000)
            );
        },

        checkSeriesCarouselInitialElements: function() {
            return (
              this.waitForElementVisible('@productCarousel', 1000)
                .waitForElementVisible('@firstCardTitle', 1000)
                .waitForElementVisible('@firstCardShopNow', 1000)
                .waitForElementVisible('@secondCardTitle', 1000)
                .waitForElementVisible('@secondCardShopNow', 1000)
                .waitForElementVisible('@thirdCardTitle', 1000)
                .waitForElementVisible('@thirdCardShopNow', 1000)
            );
        },

        checkFooterInitialElements: function() {
            return (
              this.waitForElementVisible('@guaranteeComponent', 1000)
                .waitForElementVisible('@newsletterComponent', 1000)
                .waitForElementVisible('@followUsComponent', 1000)
                .waitForElementVisible('@footerNavigation', 1000)
                .waitForElementVisible('@bottomWrapper', 1000)
                .waitForElementVisible('@bottomWrapperLinks', 1000)
            );
        },

        checkGuestEmptyBagInitialElements: function() {
            return (
              this.waitForElementVisible('@emptyBagHeader', 3000)
                .waitForElementVisible('@emptyBagFirstDescription', 3000)
                .waitForElementVisible('@emptyBagGuestSecondDescription', 3000)
                .waitForElementVisible('@emptyBagGuestSignIn', 3000)
                .waitForElementVisible('@emptyBagStartShopping', 3000)
            );
        },

        checkRegisteredEmptyBagInitialElements: function() {
            return (
              this.waitForElementVisible('@emptyBagHeader', 3000)
                .waitForElementVisible('@emptyBagFirstDescription', 3000)
                .waitForElementVisible('@emptyBagStartShopping', 3000)
            );
        },

        checkCookieSettingsPageInitialElements: function() {
            return (
              this.waitForElementVisible('@requiredCookiesRadioButton', 3000)
                .waitForElementVisible('@functionalCookiesCheckBox', 3000)
                .waitForElementVisible('@marketingCookiesCheckBox', 3000)
                .waitForElementVisible('@saveButton', 3000)
                .waitForElementVisible('@cookieSettingsLink', 3000)
            );
        },

        //Main Functions

        acceptCookies: function() {
            return this.waitForElementVisible('@acceptCookiesRibbon', 9000).click('@acceptCookiesRibbon');
        },

        signInAccount: function() {
            return this.waitForElementVisible('@signIn', 1000).click('@signIn');
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

        clickSixthMegaFirstItem: function() {
            return this.waitForElementVisible('@sixthMegaFirstItem', 1000).click('@sixthMegaFirstItem');
        },

        clickFirstMegaFirstItem: function() {
            return this.waitForElementVisible('@firstMegaFirstItem', 1000).click('@firstMegaFirstItem');
        },

        clickShopBySeeAll: function() {
            return this.waitForElementVisible('@shopBySeeAll', 3000).click('@shopBySeeAll');
        },


        //New Sets Functions

        clickNewSetsFirstItem: function() {
            return this.waitForElementVisible('@newSetsFirstCard', 1000).click('@newSetsFirstCard');
        },

        clickNewSetsSecondItem: function() {
            return this.waitForElementVisible('@newSetsSecondCard', 1000).click('@newSetsSecondCard');
        },

        clickNewSetsThirdItem: function() {
            return this.waitForElementVisible('@newSetsThirdCard', 1000).click('@newSetsThirdCard');
        },

        clickSeeMoreNewSets: function() {
            return this.waitForElementVisible('@newSetsSeeMoreMainPage', 1000).click('@newSetsSeeMoreMainPage');
        },


        //Explore Functions:

        clickFirstBannerExplore: function() {
            return this.waitForElementVisible('@exploreFirstBannerInstructions', 1000).click('@exploreFirstBannerInstructions');
        },

        clickFourthBannerExplore: function() {
            return this.waitForElementVisible('@exploreFourthBannerIdea', 1000).click('@exploreFourthBannerIdea');
        },

        clickFifthBannerExplore: function() {
            return this.waitForElementVisible('@exploreFifthBannerCar', 1000).click('@exploreFifthBannerCar');
        },

        //PLP
        
        clickFacetFilterFirstOption: function() {
            return this.waitForElementVisible('@facetFilterFirstOption', 1000).click('@facetFilterFirstOption');
        },

        clickResetAll: function() {
            return this.waitForElementVisible('@resetAllButton', 1000).click('@resetAllButton');
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


        //Themes - Main Page

        clickSeeMoreThemes: function() {
            return this.waitForElementVisible('@themesSeeMoreMainPage', 1000).click('@themesSeeMoreMainPage');
        },

        clickFirstItemThemes: function() {
            return this.waitForElementVisible('@themesFirstItemMainPage', 1000).click('@themesFirstItemMainPage');
        },

        clickSecondItemThemes: function() {
            return this.waitForElementVisible('@themesSecondItemMainPage', 1000).click('@themesSecondItemMainPage');
        },

        clickThirdItemThemes: function() {
            return this.waitForElementVisible('@themesThirdItemMainPage', 1000).click('@themesThirdItemMainPage');
        },

        clickFourthItemThemes: function() {
            return this.waitForElementVisible('@themesFouthItemMainPage', 1000).click('@themesFouthItemMainPage');
        },


        //PDP

        clickAddToBagButton: function() {
            return this.waitForElementVisible('@addToBagButton', 1000).click('@addToBagButton');
        },
        
        clickXModal: function() {
            return this.waitForElementVisible('@xButton', 1000).click('@xButton');
        },


        //My Bag Functions

        clickAddedFirstProduct: function() {
            return this.waitForElementVisible('@addedFirstProduct', 1000).click('@addedFirstProduct');
        },

        clickMiniCart: function() {
            return this.waitForElementVisible('@miniCart', 1000).click('@miniCart');
        },


        //Subscribe Field

        typeYourEmailAddress: function(email) {
            return this.waitForElementVisible('@typeYourEmailAddress', 1000).setValue('@typeYourEmailAddress', email);
        },

        clickSubscribeButton: function() {
            return this.waitForElementVisible('@subscribeButton', 10000).click('@subscribeButton');
        },


        //Global Footer

        clickCookiesSettings: function() {
            return this.waitForElementVisible('@cookiesSettings', 1000).click('@cookiesSettings');
        },

    }]
};