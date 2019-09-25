module.exports = {

    url: 'https://beko-com-test.adobecqms.net/es-es',
    //url: 'https://www.beko.com/es-es', //Dev env Spain
    elements: {
        //Main Items
        headerMain: '#header-main',
        bekoLogo : '.HeaderMain__root > div > a:first-child',
        products : '.JS-menu-button.subnav-products.NavigationButton__root',
        support : '.JS-menu-button.subnav-0.NavigationButton__root',
        aboutBeko : '.JS-menu-button.subnav-1.NavigationButton__root',
        blog : 'a.NavigationButton__root[href*="Blog"]',
        eatLikeAPro : 'a.NavigationButton__root[href*="eatlikeapro"]',
        searchHomePage: '#header-main > button > div',
        searchModal: 'input[name = "search"]',
        findARetailer: '#header-main > div:first-child > nav:nth-child(3) > a > div > div',
        heroBanner: '.Hero__slideContent',
        homePageFooter: '.FooterTop__root',

        //Home Page Teaser Card
        teaserFirstCardPicture: '.teaser100.aem-GridColumn--default--12 > div > div > div > div > picture',
        teaserCardFirstButton: '.teaser100.aem-GridColumn--default--12 > div > div > div > div > div > div > div:nth-child(2)',
        teaserCardFirstPDPBanner: '.elements.text.parbase',


        //Search Home Page
        searchKeyword: '#modalSearchAutocompleteContainer > div > div > a:first-child > button > b',
        searchResult: '#searchResultsContainer > div:nth-child(2) > div:first-child',
        searchXButton: '.root.responsivegrid > div > div:nth-child(2) > div > div:first-child > div:first-child > button:nth-child(2)',
        productsWaypoint: '#sticky-nav > div > div > section > div:first-child > button',
        productsHeading: '#section-products > section > div:first-child',
        supportWaypoint: '#sticky-nav > div > div > section > div:nth-child(2) > button',
        supportHeading: '#section-support > section > div:first-child',
        

        //Products Items-first product grid
        productsGridFirst: '#subnav-products-grid-category-0 .SubNavProductsGrid__top',
        productsGridFirstTitle: '#subnav-products-grid-category-0 .SubNavProductsGrid__top .SubNavProductsGrid__title',
        productGridFirstItemFirst: '#subnav-products-grid-category-0 > div >div >div > div:first-child',
        productGridFirstItemSecond: '#subnav-products-grid-category-0 > div >div >div > div:nth-child(2)',
        productGridFirstItemThird: '#subnav-products-grid-category-0 > div >div >div > div:nth-child(3)',
        productGridFirstItemFourth: '#subnav-products-grid-category-0 > div >div >div > div:nth-child(4)',
        productGridFirstSeeAllButton: '#subnav-products-grid-category-0 > div > div:nth-child(2) > button',
        selectedProductsMenu: '.JS-toggle.JS-subnav-category.SubNavProductsMenu__root.open > aside',


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

        //Support Items
        supportHeader: '.JS-menu-button.subnav-0.NavigationButton__root',
        supportFirstElement: '.subnav-inner.subnav-0 > div > div > div a:first-child',
        supportSecondElement: '.subnav-inner.subnav-0 > div > div > div a:nth-child(2)',
        supportThirdElement: '.subnav-inner.subnav-0 > div > div > div a:nth-child(3)',

            //Select Product on Support Page
            productSelection: '.JS-support-home-hero-issue-select.SupportHomeHero__button.SupportHomeHero__issueSelect',
            issueSelection: '.SupportHomeHero__section2Wrapper > div > button:first-child',
            productType: '#productsWrapper > div:nth-child(3) > button',
            issueType: '#issuesWrapper > div:nth-child(3) > button',
            getHelpButton: '#supportForm > button > div',
            startOver: '.JourneyTop__root > a > div',
            userManualHelpCard: '.CategoriesMenuSlider__root > div > section > div:first-child > div > a',
            productServiceFinder: '.CategoriesMenuSlider__root > div > section > div:nth-child(2) > div > a',
            productTenYearsService: '.CategoriesMenuSlider__root > div > section > div:nth-child(3) > div > a',
            productsContact: '.CategoriesMenuSlider__root > div > section > div:nth-child(4) > div > a',
            supportResult: '.ScrollCarousel__scrollWrapper > section > div > button',
            helpDetailsFAQ: '#where-can-i-find-my-beko-blender-s-serial-number- > div > div:first-child > div:nth-child(3) > button',
            waypointFAQ: '.CategoriesMenuSlider__root > div > section > div > button',
            waypointFAQCollapse: '#faqsContainer > div:nth-child(2) .JS-toggle-button',
            openFAQ: '.collapsible.ContentToggle__content.open',
            searchYourCountry: '#countrySearch',
            selectTurkey: '#countrySearch > ul > li:nth-child(48)',
        
            //User Manuals
            userManualBanner: '.Hero__slideContent',
            searchBarUserManuals: 'input[name = "search"]',
            searchButtonUserManuals: '.ModelSelect__form > div:first-child > button',
            userManualSearchResult: '.container.searchResultComponent',
            cookiesContinueButton: '.Header__desktop > div:first-child > section > div >  div > div:nth-child(2) > button',
            userManualsHelpHomeButton: '.NeedMoreHelp__root > div > div > div > div > a',
            findingModelNumber: '.supportfindnumber.responsivegrid.aem-GridColumn--default--12 > button > div > span',
            findingModelFirstItem: '.JS-modal-steps > div:first-child > div > div > section > div > div:first-child > button',
            findingModelXButton: '.Modal__root > div:nth-child(2) > button:nth-child(2)',
            productsYouHave: '.JS-modal-steps > div:first-child > div > div > h2',

            //Find Service-Retailer
            findAService: '.subH.SectionHeader__prefix',
            findARetailerAddressField: '.Modal__contentWrapper > div > div > div:first-child',
            findARetailerXButton: '#modal-where-to-buy > div > button',

            //Contact
            contactBanner: '.Hero__slideContent',
            navigateHelpCenterButton: '.calltoaction > a > div',
            incidenceDropDownListBox: '.categoryselector > div:nth-child(2) > div:nth-child(2) > button',
            incidenceSelectedItem: '.categoryselector > div:nth-child(2) > div:nth-child(2) > ul > li:first-child > button',
            productRelatedIncidenceDropDown: '.productcategoryselector > div > div:nth-child(2) > button',
            productRelatedIncidenceItem: '.productcategoryselector > div > div:nth-child(2) > ul > li:first-child > button',
            termsConditionsLink: '.Checkbox__title > span > a:first-child',
            termsAndConditionsHeader: '.richtext.text.parbase.aem-GridColumn--default--12 > p:first-child > b > span',
            helpfulLinksButton: '.container.JS-cta-buttons > div:nth-child(2) > div > a',
            directedHelpfulLinkPageBanner: '.HeroPLP__textContent',

        //About Beko Items
        aboutBekoHeader: '.JS-menu-button.subnav-1.NavigationButton__root',
        aboutBekoFirstElement: '.subnav-inner.subnav-1 > div > div > div a:first-child',
        aboutBekoSecondElement: '.subnav-inner.subnav-1 > div > div > div a:nth-child(2)',
        aboutUsBanner: '.Hero__slide--banner.Hero__slide--medium',
        sponsorshipsPageContent: '.root.responsivegrid > div > div:nth-child(2) > div',

    },
    commands: [{

        checkInitialElements: function() {
            return (
              this.waitForElementVisible('@headerMain', 1000)
                .waitForElementVisible('@bekoLogo', 1000)
                .waitForElementVisible('@products', 1000)
                .waitForElementVisible('@support', 1000)
                .waitForElementVisible('@aboutBeko', 1000)
                .waitForElementVisible('@blog', 1000)
                .waitForElementVisible('@eatLikeAPro', 1000)
                .waitForElementVisible('@searchHomePage', 1000)
                .waitForElementVisible('@findARetailer', 1000)
                .waitForElementVisible('@heroBanner', 1000)
            );
        },

        checkSupportElements: function() {
            return (
              this.waitForElementVisible('@supportFirstElement', 1000)
                .waitForElementVisible('@supportSecondElement', 1000)
                .waitForElementVisible('@supportThirdElement', 1000)
            );
        },

        openFirstTeaserCardPDP: function() {
            return this.waitForElementVisible('@teaserCardFirstButton', 1000).click('@teaserCardFirstButton');
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

        clickSearch: function() {
            return this.waitForElementVisible('@searchHomePage', 1000).click('@searchHomePage');
        },

        searchHomePage: function(mainQuery) {
            return this.waitForElementVisible('@searchModal', 1000).setValue('@searchModal', mainQuery);
        },

        clickSearchedKeyword: function() {
            return this.waitForElementVisible('@searchKeyword', 1000).click('@searchKeyword');
        },

        clickXButtonSearch: function() {
            return this.waitForElementVisible('@searchXButton', 1000).click('@searchXButton');
        },

        clickProductsWaypoint: function() {
            return this.waitForElementVisible('@productsWaypoint', 1000).click('@productsWaypoint');
        },

        clickSupportWaypoint: function() {
            return this.waitForElementVisible('@supportWaypoint', 1000).click('@supportWaypoint');
        },

        openSupportMenu: function() {
            return this.waitForElementVisible('@supportHeader', 1000).click('@supportHeader');
        },

        openHelpCenter: function() {
            return this.waitForElementVisible('@supportFirstElement', 1000).click('@supportFirstElement');
        },

        clickHelpCenterProduct: function() {
            return this.waitForElementVisible('@productSelection', 1000).click('@productSelection');
        },

        selectHelpCenterProduct: function() {
            return this.waitForElementVisible('@productType', 1000).click('@productType');
        },

        clickHelpCenterIssue: function() {
            return this.waitForElementVisible('@issueSelection', 1000).click('@issueSelection');
        },

        selectHelpCenterIssue: function() {
            return this.waitForElementVisible('@issueType', 1000).click('@issueType');
        },

        clickGetHelpButton: function() {
            return this.waitForElementVisible('@getHelpButton', 1000).click('@getHelpButton');
        },

        clickStartOverButton: function() {
            return this.waitForElementVisible('@startOver', 1000).click('@startOver');
        },

        openContactPage: function() {
            return this.waitForElementVisible('@supportSecondElement', 1000).click('@supportSecondElement');
        },

        openUserManualsPage: function() {
            return this.waitForElementVisible('@supportThirdElement', 1000).click('@supportThirdElement');
        },

        clickHelpHomeButton: function() {
            return this.waitForElementVisible('@userManualsHelpHomeButton', 1000).click('@userManualsHelpHomeButton');
        },

        closeCookies: function() {
            return this.waitForElementVisible('@cookiesContinueButton', 1000).click('@cookiesContinueButton');
        },

        searchUserManuals: function(mainQuery) {
            return this.waitForElementVisible('@searchBarUserManuals', 1000).setValue('@searchBarUserManuals', mainQuery);
        },

        clickFindingModelNumber: function() {
            return this.waitForElementVisible('@findingModelNumber', 1000).click('@findingModelNumber');
        },

        clickFindingModelFirstItem: function() {
            return this.waitForElementVisible('@findingModelFirstItem', 1000).click('@findingModelFirstItem');
        },

        clickFindingModelXButton: function() {
            return this.waitForElementVisible('@findingModelXButton', 1000).click('@findingModelXButton');
        },

        clickSearchButtonUserManuals: function() {
            return this.waitForElementVisible('@searchButtonUserManuals', 1000).click('@searchButtonUserManuals');
        },

        openAboutBekoMenu: function() {
            return this.waitForElementVisible('@aboutBekoHeader', 1000).click('@aboutBekoHeader');
        },

        clickAboutBekoAboutUs: function() {
            return this.waitForElementVisible('@aboutBekoFirstElement', 1000).click('@aboutBekoFirstElement');
        },

        clickAboutBekoSponsorships: function() {
            return this.waitForElementVisible('@aboutBekoSecondElement', 1000).click('@aboutBekoSecondElement');
        },

        clickFindAService: function() {
            return this.waitForElementVisible('@productServiceFinder', 1000).click('@productServiceFinder');
        },

        navigateHelpCenter: function() {
            return this.waitForElementVisible('@navigateHelpCenterButton', 1000).click('@navigateHelpCenterButton');
        },

        clickWaypointFAQ: function() {
            return this.waitForElementVisible('@waypointFAQ', 1000).click('@waypointFAQ');
        },

        clickFindARetailer: function() {
            return this.waitForElementVisible('@findARetailer', 1000).click('@findARetailer');
        },

        clickUserManualHelpCard: function() {
            return this.waitForElementVisible('@userManualHelpCard', 1000).click('@userManualHelpCard');
        },

        clickProductTenYearsService: function() {
            return this.waitForElementVisible('@productTenYearsService', 1000).click('@productTenYearsService');
        },

        searchYourCountryDropDownListBox: function() {
            return this.waitForElementVisible('@searchYourCountry', 1000).click('@searchYourCountry');
        },

        selectYourCountry: function() {
            return this.waitForElementVisible('@selectTurkey', 1000).click('@selectTurkey');
        },

        clickIncidenceDropDown: function() {
            return this.waitForElementVisible('@incidenceDropDownListBox', 1000).click('@incidenceDropDownListBox');
        },

        selectIncidenceItem: function() {
            return this.waitForElementVisible('@incidenceSelectedItem', 1000).click('@incidenceSelectedItem');
        },

        clickProductRelatedIncidence: function() {
            return this.waitForElementVisible('@productRelatedIncidenceDropDown', 1000).click('@productRelatedIncidenceDropDown');
        },

        selectProductRelatedIncidence: function() {
            return this.waitForElementVisible('@productRelatedIncidenceItem', 1000).click('@productRelatedIncidenceItem');
        },

        clickTermsAndConditionsLink: function() {
            return this.waitForElementVisible('@termsConditionsLink', 1000).click('@termsConditionsLink');
        },

        clickFindARetailerXButton: function() {
            return this.waitForElementVisible('@findARetailerXButton', 1000).click('@findARetailerXButton');
        },

        clickHelpfulLinksButton: function() {
            return this.waitForElementVisible('@helpfulLinksButton', 1000).click('@helpfulLinksButton');
        },

        clickProductsContact: function() {
            return this.waitForElementVisible('@productsContact', 1000).click('@productsContact');
        },

        clickWaypointFAQCollapse: function() {
            return this.waitForElementVisible('@waypointFAQCollapse', 1000).click('@waypointFAQCollapse');
        },

        //Return Home Page
        bekoHomePage() {
            return this
                .click('@bekoLogo');
        }

    }]
};