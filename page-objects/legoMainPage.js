module.exports = {

    url: 'https://lego.maf.demo.emakina.ae/',
    
    elements: {

        //Carousel Component
        carouselComponent: '.Section1 .slide:first-child',
        carouselDescription : '.Section1 .slide:first-child .RIGHT > p',
        carouselShopNowButton : '.Section1 .slide:first-child .btn-primary',
        carouselNext : '.Section1 .next',
        carouselPrev : '.Section1 .previous',
        carouselDots : '.Section1 .indicators > button:first-child',
        acceptCookiesButton: '.btn-accept',

        //Series Carousel Component
        productCarousel : '.Section3 .carousel',
        firstCardSeries: '.Section3 .carousel-inner > div:first-child > div:first-child img',
        firstCardTitle: '.Section3 .carousel-inner > div:first-child > div:first-child .carousel-caption > h3',
        firstCardShopNow: '.Section3 .carousel-inner > div:first-child > div:first-child .carousel-caption > a',
        secondCardSeries: '.Section3 .carousel-inner > div:first-child > div:nth-child(2) img',
        secondCardTitle: '.Section3 .carousel-inner > div:first-child > div:nth-child(2) .carousel-caption > h3',
        secondCardShopNow: '.Section3 .carousel-inner > div:first-child > div:nth-child(2) .carousel-caption > a',
        thirdCardSeries: '.Section3 .carousel-inner > div:first-child > div:nth-child(3) img',
        thirdCardTitle: '.Section3 .carousel-inner > div:first-child > div:nth-child(3) .carousel-caption > h3',
        thirdCardShopNow: '.Section3 .carousel-inner > div:first-child > div:nth-child(3) .carousel-caption > a',
        fourthCardSeries: '.Section3 .carousel-inner > div:first-child > div:nth-child(4) img',
        fourthCardTitle: '.Section3 .carousel-inner > div:first-child > div:nth-child(4) .carousel-caption > h3',
        fourthCardShopNow: '.Section3 .carousel-inner > div:first-child > div:nth-child(4) .carousel-caption > a',

        //Themes Component (didnt edit)
        themesComponent: '.theme-carousel-wrapper:first-child',
        themesMainTitle: '.theme-carousel-wrapper:first-child .title',
        themesSeeMoreButton: '.example',
        themesNext: '.theme-carousel-wrapper:first-child .carousel-control-next',
        themesPrev: '.theme-carousel-wrapper:first-child .carousel-control-prev',
        themesFirstItem: '.theme-carousel-wrapper:first-child .item-wrapper:first-child a',
        themesSecondItem: '.theme-carousel-wrapper:first-child .item-wrapper:nth-child(2) a',
        themesThirdItem: '.theme-carousel-wrapper:first-child .item-wrapper:nth-child(3) a',
        themesFouthItem: '.theme-carousel-wrapper:first-child .item-wrapper:nth-child(4) a',
        themesFifthItem: '.theme-carousel-wrapper:first-child .item-wrapper:nth-child(5) a',
        themesSixthItem: '.theme-carousel-wrapper:first-child .item-wrapper:nth-child(6) a',
        facetWrapper: '.ProductListPageTemplate .facetWrapper',

        //Explore Component
        exploreComponent: '.Section2C app-grid-layout:nth-child(2) > div',
        exploreMainTitle: '.Section2C app-grid-layout:nth-child(2) > div > span',
        exploreFirstBannerInstructions: '.Section2C app-grid-layout:nth-child(2) > div > div > div:first-child > div .banner-img-wrapper',
        exploreFirstBannerTitle: '.Section2C app-grid-layout:nth-child(2) > div > div > div:first-child > div h3',
        exploreFirstBannerDescription: '.Section2C app-grid-layout:nth-child(2) > div > div > div:first-child > div p',
        exploreSecondBannerHelp: '.Section2C app-grid-layout:nth-child(2) app-grid-layout > div > div > div:first-child .carousel-item',
        exploreSecondBannerTitle: '.Section2C app-grid-layout:nth-child(2) app-grid-layout > div > div > div:first-child .carousel-item h3',
        exploreSecondBannerDescription: '.Section2C app-grid-layout:nth-child(2) app-grid-layout > div > div > div:first-child .carousel-item p',
        exploreThirdBannerApp: '.Section2C app-grid-layout:nth-child(2) app-grid-layout > div > div > div:nth-child(2) .carousel-item',
        exploreThirdBannerTitle: '.Section2C app-grid-layout:nth-child(2) app-grid-layout > div > div > div:nth-child(2) .carousel-item h3',
        exploreThirdBannerDescription: '.Section2C app-grid-layout:nth-child(2) app-grid-layout > div > div > div:nth-child(2) .carousel-item p',
        exploreFourthBannerIdea: '.Section2C app-grid-layout:nth-child(2) app-grid-layout > div > div > div:nth-child(3) .carousel-item',
        exploreFourthBannerTitle: '.Section2C app-grid-layout:nth-child(2) app-grid-layout > div > div > div:nth-child(3) .carousel-item h3',
        exploreFourthBannerDescription: '.Section2C app-grid-layout:nth-child(2) app-grid-layout > div > div > div:nth-child(3) .carousel-item p',
        exploreFifthBannerCar: '.Section2C app-grid-layout:nth-child(2) app-grid-layout > div > div > div:nth-child(4) .carousel-item',
        exploreFifthBannerTitle: '.Section2C app-grid-layout:nth-child(2) app-grid-layout > div > div > div:nth-child(4) .carousel-item h3',
        exploreFifthBannerDescription: '.Section2C app-grid-layout:nth-child(2) app-grid-layout > div > div > div:nth-child(4) .carousel-item p',

        //New Sets Component
        newSetsComponent: '.Section4 .category-carousel-wrapper',
        newSetsMainTitle: '.Section4 .category-carousel-wrapper > h3',
        newSetsFirstCard: '.Section4 .carousel-item.active > div:first-child > a',
        newSetsSecondCard: '.Section4 .carousel-item.active > div:nth-child(2) > a',
        newSetsThirdCard: '.Section4 .carousel-item.active > div:nth-child(3) > a',
        newSetsFourthCard: '.Section4 .carousel-item.active > div:nth-child(4) > a',
        newSetsNext: '.Section4 .carousel-control-next',
        newSetsPrev: '.Section4 .carousel-control-prev',
        newSetsSeeMoreButton: '.example', //cannot be displayed, after bug fix update the path

        //Banner(TeaserCard)
        largeBanner: '.Section2B .carousel-item',
        largeBannerTitle: '.Section2B .LEFT > h3',
        largeBannerDescription: '.Section2B .LEFT > p',
        largeBannerButton: '.Section2B .LEFT > button',
        teaserCardImage: '.Section2B .RIGHT',

        //Guarantee Component
        guaranteeComponent: '.Footer > app-grid-layout > div',
        guaranteeComponentTitle: '.Footer > app-grid-layout > div > span',
        guaranteeComponentFirst: '.Footer > app-grid-layout > div > div > div:first-child .imageLink-wrapper',
        guaranteeComponentFirstDescription: '.Footer > app-grid-layout > div > div > div:first-child .imageLink-wrapper span',
        guaranteeComponentSecond: '.Footer > app-grid-layout > div > div > div:nth-child(2) .imageLink-wrapper',
        guaranteeComponentSecondDescription: '.Footer > app-grid-layout > div > div > div:nth-child(2) .imageLink-wrapper span',
        guaranteeComponentThird: '.Footer > app-grid-layout > div > div > div:nth-child(3) .imageLink-wrapper',
        guaranteeComponentThirdDescription: '.Footer > app-grid-layout > div > div > div:nth-child(3) .imageLink-wrapper span',
        guaranteeComponentFourth: '.Footer > app-grid-layout > div > div > div:nth-child(4) .imageLink-wrapper',
        guaranteeComponentFourthDescription: '.Footer > app-grid-layout > div > div > div:nth-child(4) .imageLink-wrapper span',

        //Signup Newsletter component (Şu an UX'te yok kaldırıldı mı???)
        signupNewsletterComponent: '.Footer .CENTER',
        signupNewsletterTitle: '.Footer .CENTER > h3',
        signupNewsletterDescription: '.Footer .CENTER > p',
        signupNewsletterButton: '.Footer .CENTER > button',

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

        acceptCookies: function() {
            return this.waitForElementVisible('@acceptCookiesButton', 1000).click('@acceptCookiesButton');
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

        clickFirstItemThemes: function() {
            return this.waitForElementVisible('@themesFirstItem', 1000).click('@themesFirstItem');
        },

        clickSecondItemThemes: function() {
            return this.waitForElementVisible('@themesSecondItem', 1000).click('@themesSecondItem');
        },

        clickThirdItemThemes: function() {
            return this.waitForElementVisible('@themesThirdItem', 1000).click('@themesThirdItem');
        },

        clickFourthItemThemes: function() {
            return this.waitForElementVisible('@themesFouthItem', 1000).click('@themesFouthItem');
        },

        clickFifthItemThemes: function() {
            return this.waitForElementVisible('@themesFifthItem', 1000).click('@themesFifthItem');
        },

        clickSixthItemThemes: function() {
            return this.waitForElementVisible('@themesSixthItem', 1000).click('@themesSixthItem');
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

        clickFirstCardNewSets: function() {
            return this.waitForElementVisible('@newSetsFirstCard', 1000).click('@newSetsFirstCard');
        },

        clickSecondCardNewSets: function() {
            return this.waitForElementVisible('@newSetsSecondCard', 1000).click('@newSetsSecondCard');
        },

        clickThirdCardNewSets: function() {
            return this.waitForElementVisible('@newSetsThirdCard', 1000).click('@newSetsThirdCard');
        },

        clickFourthCardNewSets: function() {
            return this.waitForElementVisible('@newSetsFourthCard', 1000).click('@newSetsFourthCard');
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