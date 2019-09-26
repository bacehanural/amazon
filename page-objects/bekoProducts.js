module.exports = {

    url: 'https://beko-com-test.adobecqms.net/es-es',
    elements: {
        //Main Items
        headerMain: '#header-main',
        bekoLogo : '.HeaderMain__root > div > a:first-child',
        products : '.JS-menu-button.subnav-products.NavigationButton__root',
        heroBanner: '.Hero__slideContent',
        homePageFooter: '.FooterTop__root',
        cookiesContinueButton: '.Header__desktop > div:first-child > section > div >  div > div:nth-child(2) > button',
        
        //PLP&PDP
        selectedProductsMenu: '.JS-toggle.JS-subnav-category.SubNavProductsMenu__root.open > aside',
        selectedKitchenProduct: '#subnav > div:first-child > div > div:nth-child(2) > div > div:first-child > div > div:first-child > a:nth-child(2)',
        selectedLaundryProduct: '#subnav > div:first-child > div > div:nth-child(3) > div > div:first-child > div > div > a:nth-child(2)',
        selectedBuiltInProduct: '#subnav > div:first-child > div > div:nth-child(4) > div > div:first-child > div > div > a:nth-child(2)',
        selectedAirHomeCareProduct: '#subnav > div:first-child > div > div:nth-child(5) > div > div:first-child > div > div > a:nth-child(2)',
        productPageTitle: '.Breadcrumbs__root > div',
        productCard: '#js-plp-loader-wrapper > div:nth-child(2) > div > section > div > div:first-child > div',
        pdpMainPage: '.pageContent > div:first-child > section #product-info-top > div:first-child > div:first-child',
        productEnergyClassWrapper: '#js-plp-loader-wrapper > div:nth-child(2) > div > section > div > div:first-child > div  .ProductCardPLP__productSpecsWrapper',
        plpWhereToBuyButton: '#js-plp-loader-wrapper > div:nth-child(2) > div > section > div > div:first-child #button-buy-not-sticky',
        pdpWhereToBuyButton: '.ProductInfoParams__root .ProductInfoParams__center .container  button',
        findAStoreNearMe: '#modal-where-to-buy-overlay > div > div:nth-child(2) > div > div > div:nth-child(6) > a',
        findAStoreNearMeMap: '#modal-where-to-buy-near-me > div:first-child > div > div > div > div',
        filterButton: '#static-filters button',
        filterFirstTechnologyButton: '.filterWrapper > form > div:nth-child(3) #tech_ActiveFreshBlueLight_Cooling > div > button',
        clearAllButton: '.JS-filter-clear-button',
        technologies: '.JS-Filter-Section > div:first-child',
        seeMatchingProductsButton: '.JS-submit-filter-button',
        matchingProductsResult: '#static-filters .ProductFilters__buttons',
        closeFilterButton: '.filterWrapper > form > button',
        plpFirstProductCompare: '#productCardContainer > div:first-child > div .ProductPLPheader__root > button:nth-child(2)',
        plpSecondProductCompare: '#productCardContainer > div:nth-child(2) > div .ProductPLPheader__root > button:nth-child(2)',
        plpThirdProductCompare: '#productCardContainer > div:nth-child(3) > div .ProductPLPheader__root > button:nth-child(2)',
        plpFourthProductCompare: '#productCardContainer > div:nth-child(4) > div .ProductPLPheader__root > button:nth-child(2)',
        compareHeader: '#header #compareHeader',
        comparePage: '.CompareCardsSlider__center',
        comparePageRemoveButton: '.CompareCardsSlider__center > div > div > div:first-child > a',
        pdpCompareButton: '.ProductInfo__header > div:nth-child(2) button:nth-child(2)',
        backToPLP: '.Breadcrumbs__root > div > span > div:nth-child(5) > a',

        //Products Items-first product grid
        productsGridFirst: '#subnav-products-grid-category-0 .SubNavProductsGrid__top',
        productsGridFirstTitle: '#subnav-products-grid-category-0 .SubNavProductsGrid__top .SubNavProductsGrid__title',
        productGridFirstItemFirst: '#subnav-products-grid-category-0 > div >div >div > div:first-child',
        productGridFirstItemSecond: '#subnav-products-grid-category-0 > div >div >div > div:nth-child(2)',
        productGridFirstItemThird: '#subnav-products-grid-category-0 > div >div >div > div:nth-child(3)',
        productGridFirstItemFourth: '#subnav-products-grid-category-0 > div >div >div > div:nth-child(4)',
        productGridFirstSeeAllButton: '#subnav-products-grid-category-0 > div > div:nth-child(2) > button',

        //Products Items-second product grid
        productsGridSecond: '#subnav-products-grid-category-1 .SubNavProductsGrid__top',
        productsGridSecondTitle: '#subnav-products-grid-category-1 .SubNavProductsGrid__top .SubNavProductsGrid__title',
        productGridSecondItemFirst: '#subnav-products-grid-category-1 > div >div >div > div:first-child',
        productGridSecondItemSecond: '#subnav-products-grid-category-1 > div >div >div > div:nth-child(2)',
        productGridSecondItemThird: '#subnav-products-grid-category-1 > div >div >div > div:nth-child(3)',
        productGridSecondItemFourth: '#subnav-products-grid-category-1 > div >div >div > div:nth-child(4)',
        productGridSecondSeeAllButton: '#subnav-products-grid-category-1 > div > div:nth-child(2) > button',

        //Products Items-third product grid
        productsGridThird: '#subnav-products-grid-category-2 .SubNavProductsGrid__top',
        productsGridThirdTitle: '#subnav-products-grid-category-2 .SubNavProductsGrid__top .SubNavProductsGrid__title',
        productGridThirdItemFirst: '#subnav-products-grid-category-2 > div >div >div > div:first-child',
        productGridThirdItemSecond: '#subnav-products-grid-category-2 > div >div >div > div:nth-child(2)',
        productGridThirdItemThird: '#subnav-products-grid-category-2 > div >div >div > div:nth-child(3)',
        productGridThirdItemFourth: '#subnav-products-grid-category-2 > div >div >div > div:nth-child(4)',
        productGridThirdSeeAll: '#subnav-products-grid-category-2 > div > div:nth-child(2) > button',

        //Products Items-fourth product grid
        productsGridFourth: '#subnav-products-grid-category-3 .SubNavProductsGrid__top',
        productsGridFourthTitle: '#subnav-products-grid-category-3 .SubNavProductsGrid__top .SubNavProductsGrid__title',
        productGridFourthItemFirst: '#subnav-products-grid-category-3 > div >div >div > div:first-child',
        productGridFourthItemSecond: '#subnav-products-grid-category-3 > div >div >div > div:nth-child(2)',
        productGridFourthSeeAll: '#subnav-products-grid-category-3 > div > div:nth-child(2) > button',

    },
    commands: [{

        checkInitialElements: function() {
            return (
              this.waitForElementVisible('@headerMain', 1000)
                .waitForElementVisible('@bekoLogo', 1000)
                .waitForElementVisible('@products', 1000)
                .waitForElementVisible('@heroBanner', 1000)
            );
        },

        openProductsMenu: function() {
            return this.waitForElementVisible('@products', 1000).click('@products');
        },

        openKitchenItem: function() {
            return this.waitForElementVisible('@productGridFirstItemFirst', 1000).click('@productGridFirstItemFirst');
        },

        openKitchenSeeAll: function() {
            return this.waitForElementVisible('@productGridFirstSeeAllButton', 1000).click('@productGridFirstSeeAllButton');
        },

        openLaundryItem: function() {
            return this.waitForElementVisible('@productGridSecondItemFirst', 1000).click('@productGridSecondItemFirst');
        },

        openLaundrySeeAll: function() {
            return this.waitForElementVisible('@productGridSecondSeeAllButton', 1000).click('@productGridSecondSeeAllButton');
        },

        openBuiltInItem: function() {
            return this.waitForElementVisible('@productGridThirdItemFirst', 1000).click('@productGridThirdItemFirst');
        },

        openBuiltInSeeAll: function() {
            return this.waitForElementVisible('@productGridThirdSeeAll', 1000).click('@productGridThirdSeeAll');
        },

        openAirHomeCareItem: function() {
            return this.waitForElementVisible('@productGridFourthItemFirst', 1000).click('@productGridFourthItemFirst');
        },

        openAirHomeCareSeeAll: function() {
            return this.waitForElementVisible('@productGridFourthSeeAll', 1000).click('@productGridFourthSeeAll');
        },

        clickKitchenProductItem: function() {
            return this.waitForElementVisible('@selectedKitchenProduct', 1000).click('@selectedKitchenProduct');
        },

        clickLaundryProductItem: function() {
            return this.waitForElementVisible('@selectedLaundryProduct', 1000).click('@selectedLaundryProduct');
        },

        clickBuiltInProductItem: function() {
            return this.waitForElementVisible('@selectedBuiltInProduct', 1000).click('@selectedBuiltInProduct');
        },

        clickAirHomeCareProductItem: function() {
            return this.waitForElementVisible('@selectedAirHomeCareProduct', 1000).click('@selectedAirHomeCareProduct');
        },

        closeCookies: function() {
            return this.waitForElementVisible('@cookiesContinueButton', 1000).click('@cookiesContinueButton');
        },

        clickProductCard: function() {
            return this.waitForElementVisible('@productCard', 1000).click('@productCard');
        },

        plpWhereToBuyButton: function() {
            return this.waitForElementVisible('@plpWhereToBuyButton', 1000).click('@plpWhereToBuyButton');
        },

        pdpWhereToBuyButton: function() {
            return this.waitForElementVisible('@pdpWhereToBuyButton', 1000).click('@pdpWhereToBuyButton');
        },

        findAStoreNearMeButton: function() {
            return this.waitForElementVisible('@findAStoreNearMe', 1000).click('@findAStoreNearMe');
        },

        clickFilterButton: function() {
            return this.waitForElementVisible('@filterButton', 1000).click('@filterButton');
        },

        clickFirstTechnologyButton: function() {
            return this.waitForElementVisible('@filterFirstTechnologyButton', 1000).click('@filterFirstTechnologyButton');
        },

        clickCloseFilterButton: function() {
            return this.waitForElementVisible('@closeFilterButton', 1000).click('@closeFilterButton');
        },

        clickClearAllButton: function() {
            return this.waitForElementVisible('@clearAllButton', 1000).click('@clearAllButton');
        },

        seeMatchingProductsButton: function() {
            return this.waitForElementVisible('@seeMatchingProductsButton', 1000).click('@seeMatchingProductsButton');
        },

        clickPlpFirstCompare: function() {
            return this.waitForElementVisible('@plpFirstProductCompare', 1000).click('@plpFirstProductCompare');
        },

        clickPlpSecondCompare: function() {
            return this.waitForElementVisible('@plpSecondProductCompare', 1000).click('@plpSecondProductCompare');
        },

        clickPlpThirdCompare: function() {
            return this.waitForElementVisible('@plpThirdProductCompare', 1000).click('@plpThirdProductCompare');
        },

        clickPlpFourthCompare: function() {
            return this.waitForElementVisible('@plpFourthProductCompare', 1000).click('@plpFourthProductCompare');
        },

        clickPdpCompare: function() {
            return this.waitForElementVisible('@pdpCompareButton', 1000).click('@pdpCompareButton');
        },

        backToPLP: function() {
            return this.waitForElementVisible('@backToPLP', 1000).click('@backToPLP');
        },

        clickPlpHeaderCompare: function() {
            return this.waitForElementVisible('@compareHeader', 1000).click('@compareHeader');
        },

        clickRemoveButton: function() {
            return this.waitForElementVisible('@comparePageRemoveButton', 1000).click('@comparePageRemoveButton');
        },

        //Return Home Page
        bekoHomePage() {
            return this
                .click('@bekoLogo');
        }

    }]
};