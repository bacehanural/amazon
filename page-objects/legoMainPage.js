module.exports = {

    url: 'https://localhost:4200',
    
    elements: {

        //Carousel Component
        carouselComponent: '#header-main',
        carouselDescription : '.HeaderMain__root > div > a:first-child',
        carouselShopNowButton : '.JS-menu-button.subnav-products.NavigationButton__root',
        carouselNext : '.JS-menu-button.subnav-0.NavigationButton__root',
        carouselPrev : '.JS-menu-button.subnav-1.NavigationButton__root',
        carouselDots : 'a.NavigationButton__root[href*="Blog"]',

        //Series Carousel Component
        productCarousel : 'a.NavigationButton__root[href*="eatlikeapro"]',
        firstCardSeries: '#header-main > button > div',
        firstCardTitle: '#header-main > button > div',
        firstCardShopNow: 'input[name = "search"]',
        secondCardSeries: '#header-main > button > div',
        secondCardTitle: '#header-main > button > div',
        secondCardShopNow: 'input[name = "search"]',
        thirdCardSeries: '#header-main > button > div',
        thirdCardTitle: '#header-main > button > div',
        thirdCardShopNow: 'input[name = "search"]',
        fourthCardSeries: '#header-main > button > div',
        fourthCardTitle: '#header-main > button > div',
        fourthCardShopNow: 'input[name = "search"]',

        //Themes Component
        themesComponent: '.teaser100.aem-GridColumn--default--12 > div > div > div > div > picture',
        themesMainTitle: '.teaser100.aem-GridColumn--default--12 > div > div > div > div > picture',
        themesSeeMoreButton: '.teaser100.aem-GridColumn--default--12 > div > div > div > div > div > div > div:nth-child(2)',
        themesNext: '.elements.text.parbase',
        themesPrev: '.elements.text.parbase',
        themesFirstItem: '.elements.text.parbase',

        //Explore Component
        exploreComponent: '#modalSearchAutocompleteContainer > div > div > a:first-child > button > b',
        exploreMainTitle: '#modalSearchAutocompleteContainer > div > div > a:first-child > button > b',
        exploreFirstBannerInstructions: '#searchResultsContainer > div:nth-child(2) > div:first-child',
        exploreFirstBannerTitle: '#searchResultsContainer > div:nth-child(2) > div:first-child',
        exploreFirstBannerDescription: '#searchResultsContainer > div:nth-child(2) > div:first-child',
        exploreSecondBannerHelp: '.root.responsivegrid > div > div:nth-child(2) > div > div:first-child > div:first-child > button:nth-child(2)',
        exploreSecondBannerTitle: '#searchResultsContainer > div:nth-child(2) > div:first-child',
        exploreSecondBannerDescription: '#searchResultsContainer > div:nth-child(2) > div:first-child',
        exploreThirdBannerApp: '#sticky-nav > div > div > section > div:first-child > button',
        exploreThirdBannerTitle: '#searchResultsContainer > div:nth-child(2) > div:first-child',
        exploreThirdBannerDescription: '#searchResultsContainer > div:nth-child(2) > div:first-child',
        exploreFourthBannerIdea: '#section-products > section > div:first-child',
        exploreFourthBannerTitle: '#searchResultsContainer > div:nth-child(2) > div:first-child',
        exploreFourthBannerDescription: '#searchResultsContainer > div:nth-child(2) > div:first-child',
        exploreFifthBannerCar: '#sticky-nav > div > div > section > div:nth-child(2) > button',
        exploreFifthBannerTitle: '#searchResultsContainer > div:nth-child(2) > div:first-child',
        exploreFifthBannerDescription: '#searchResultsContainer > div:nth-child(2) > div:first-child',
        

        //New Sets Component
        newSetsComponent: '#modalSearchAutocompleteContainer > div > div > a:first-child > button > b',
        newSetsMainTitle: '#modalSearchAutocompleteContainer > div > div > a:first-child > button > b',
        newSetsFirstCard: '#example',
        newSetsNext: '#example',
        newSetsPrev: '#example',
        newSetsSeeMoreButton: '#example',

        //Banner(TeaserCard)
        largeBanner: '#subnav-products-grid-category-1 .SubNavProductsGrid__top',
        largeBannerTitle: '#subnav-products-grid-category-1 .SubNavProductsGrid__top',
        largeBannerDescription: '#subnav-products-grid-category-1 .SubNavProductsGrid__top .SubNavProductsGrid__title',
        largeBannerButton: '#subnav-products-grid-category-1 > div >div >div > div:first-child',
        teaserCardImage: '#subnav-products-grid-category-1 > div >div >div > div:nth-child(2)',

        //Guarantee Component
        guaranteeComponent: '#subnav-products-grid-category-2 .SubNavProductsGrid__top',
        guaranteeComponentTitle: '#subnav-products-grid-category-2 .SubNavProductsGrid__top .SubNavProductsGrid__title',
        guaranteeComponentFirst: '#subnav-products-grid-category-2 > div >div >div > div:first-child',
        guaranteeComponentFirstDescription: '#subnav-products-grid-category-2 > div >div >div > div:first-child',
        guaranteeComponentSecond: '#subnav-products-grid-category-2 > div >div >div > div:nth-child(2)',
        guaranteeComponentSecondDescription: '#subnav-products-grid-category-2 > div >div >div > div:nth-child(2)',
        guaranteeComponentThird: '#subnav-products-grid-category-2 > div >div >div > div:nth-child(3)',
        guaranteeComponentThirdDescription: '#subnav-products-grid-category-2 > div >div >div > div:nth-child(3)',
        guaranteeComponentFourth: '#subnav-products-grid-category-2 > div >div >div > div:nth-child(4)',
        guaranteeComponentFourthDescription: '#subnav-products-grid-category-2 > div >div >div > div:nth-child(4)',

        //Signup Newsletter component
        signupNewsletterComponent: '#subnav-products-grid-category-3 .SubNavProductsGrid__top',
        signupNewsletterTitle: '#subnav-products-grid-category-3 .SubNavProductsGrid__top .SubNavProductsGrid__title',
        signupNewsletterDescription: '#subnav-products-grid-category-3 > div >div >div > div:first-child',
        signupNewsletterButton: '#subnav-products-grid-category-3 > div >div >div > div:nth-child(2)',

    },
    commands: [{

        checkInitialElements: function() {
            return (
              this.waitForElementVisible('@carouselComponent', 1000)
                .waitForElementVisible('@productCarousel', 1000)
                .waitForElementVisible('@themesComponent', 1000)
                .waitForElementVisible('@exploreComponent', 1000)
                .waitForElementVisible('@newSetsComponent', 1000)
                .waitForElementVisible('@largeBanner', 1000)
                .waitForElementVisible('@guaranteeComponent', 1000)
                .waitForElementVisible('@signupNewsletterComponent', 1000)
            );
        },

        clickCarouselShopNowButton: function() {
            return this.waitForElementVisible('@carouselShopNowButton', 1000).click('@carouselShopNowButton');
        },

        clickFirstProductCardShopNow: function() {
            return this.waitForElementVisible('@firstCardShopNow', 1000).click('@firstCardShopNow');
        },

        clickSecondProductCardShopNow: function() {
            return this.waitForElementVisible('@secondCardShopNow', 1000).click('@secondCardShopNow');
        },

        clickThirdProductCardShopNow: function() {
            return this.waitForElementVisible('@thirdCardShopNow', 1000).click('@thirdCardShopNow');
        },

        clickFourthProductCardShopNow: function() {
            return this.waitForElementVisible('@fourthCardShopNow', 1000).click('@fourthCardShopNow');
        },

        clickNextThemes: function() {
            return this.waitForElementVisible('@themesNext', 1000).click('@themesNext');
        },

        clickPrevThemes: function() {
            return this.waitForElementVisible('@themesPrev', 1000).click('@themesPrev');
        },

        clickSeeAllThemes: function() {
            return this.waitForElementVisible('@themesSeeMoreButton', 1000).click('@themesSeeMoreButton');
        },

        clickFirstBannerExplore: function() {
            return this.waitForElementVisible('@exploreFirstBannerInstructions', 1000).click('@exploreFirstBannerInstructions');
        },

        clickSecondBannerExplore: function() {
            return this.waitForElementVisible('@exploreSecondBannerHelp', 1000).click('@exploreSecondBannerHelp');
        },

        clickThirdBannerExplore: function() {
            return this.waitForElementVisible('@exploreThirdBannerApp', 1000).click('@exploreThirdBannerApp');
        },

        clickFourthBannerExplore: function() {
            return this.waitForElementVisible('@exploreFourthBannerIdea', 1000).click('@exploreFourthBannerIdea');
        },

        clickFifthBannerExplore: function() {
            return this.waitForElementVisible('@exploreFifthBannerCar', 1000).click('@exploreFifthBannerCar');
        },

        clickNextNewSets: function() {
            return this.waitForElementVisible('@newSetsNext', 1000).click('@newSetsNext');
        },

        clickPrevNewSets: function() {
            return this.waitForElementVisible('@newSetsPrev', 1000).click('@newSetsPrev');
        },

        clickSeeMoreNewSets: function() {
            return this.waitForElementVisible('@newSetsSeeMoreButton', 1000).click('@newSetsSeeMoreButton');
        },

        clickBannerPlayButton: function() {
            return this.waitForElementVisible('@largeBannerButton', 1000).click('@largeBannerButton');
        },

        clickGuaranteeComponentFirst: function() {
            return this.waitForElementVisible('@guaranteeComponentFirst', 1000).click('@guaranteeComponentFirst');
        },

        clickGuaranteeComponentSecond: function() {
            return this.waitForElementVisible('@guaranteeComponentSecond', 1000).click('@guaranteeComponentSecond');
        },

        clickGuaranteeComponentThird: function() {
            return this.waitForElementVisible('@guaranteeComponentThird', 1000).click('@guaranteeComponentThird');
        },

        clickGuaranteeComponentFourth: function() {
            return this.waitForElementVisible('@guaranteeComponentFourth', 1000).click('@guaranteeComponentFourth');
        },

        clickSignupNewsletterButton: function() {
            return this.waitForElementVisible('@signupNewsletterButton', 1000).click('@signupNewsletterButton');
        },

    }]
};