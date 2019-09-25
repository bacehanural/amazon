module.exports = {

    url: 'https://beko-com-test.adobecqms.net/es-es',
    elements: {
        blog : 'a.NavigationButton__root[href*="Blog"]',
        //Blog Page Elements
        blogBanner: '.BlogTop__background',
        blogSlideTitle: '.h1.Hero__slideTitle',
        readPostButton : '.overviewhero.aem-GridColumn.aem-GridColumn--default--12 .buttonInner',
        blogMenuSlider: '.ScrollCarousel__scrollWrapper',
        blogAllButton: '#sticky > div > div > div > section > div:first-child > a',
        blogFirstButton: '#sticky > div > div > div > section > div:nth-child(2) > a',
        blogSecondButton: '#sticky > div > div > div > section > div:nth-child(3) > a',
        blogReadMoreButton: '#loadMoreBlogButton',
        blogArticleList: '#blogArticleList',
        blogSecondGrid: '#blogArticleList > div:nth-child(2)',
        blogSecondGridNavigate: '#blogArticleList div:nth-child(2) > div > a',
        cookiesContinueButton: '.Header__desktop > div:first-child > section > div >  div > div:nth-child(2) > button',
        loadMoreArticle: '#blogArticleList > div:nth-child(13)',
        firstBlogArticle: '#blogArticleList > div:first-child',

        //Read Post Elements
        readPostBanner: '.blogArticleHero.blogOverviewHero.heroBanner.aem-GridColumn--default--12',
        blogShareField: '.row.BlogArticleFeedback__row',
        blogShareFacebook: '.row.BlogArticleFeedback__row > div > div > div > a:first-child',
        blogShareTwitter: '.row.BlogArticleFeedback__row > div > div > div > a:nth-child(2)',
        blogSharePinterest: '.row.BlogArticleFeedback__row > div > div > div > a:nth-child(3)',
        blogShareMail: '.row.BlogArticleFeedback__row > div > div > div > a:nth-child(4)',
        blogFeedbackField: '.feedbackblock.aem-GridColumn--default--12  > section > div > div:nth-child(2)',
        negativeFeedback: '.feedbackblock.aem-GridColumn--default--12  > section > div > div:nth-child(2) > div > div > button:first-child',
        positiveFeedback: '.feedbackblock.aem-GridColumn--default--12  > section > div > div:nth-child(2) > div > div > button:nth-child(2)',
        thanksForFeedback: '#message-thanks-for-feedback',
        
        
    },
    commands: [{

        openBlogPage: function() {
            return this.waitForElementVisible('@blog', 1000).click('@blog');
        },

        checkBlogElements: function() {
            return (
              this.waitForElementVisible('@blogBanner', 1000)
                .waitForElementVisible('@blogSlideTitle', 1000)
                .waitForElementVisible('@readPostButton', 1000)
                .waitForElementVisible('@blogMenuSlider', 1000)
                .waitForElementVisible('@blogAllButton', 1000)
                .waitForElementVisible('@blogFirstButton', 1000)
                .waitForElementVisible('@blogSecondButton', 1000)
            );
        },

        clickReadPostButton: function() {
            return this.waitForElementVisible('@readPostButton', 1000).click('@readPostButton');
        },

        closeCookies: function() {
            return this.waitForElementVisible('@cookiesContinueButton', 1000).click('@cookiesContinueButton');
        },

        clickNegativeFeedback: function() {
            return this.waitForElementVisible('@negativeFeedback', 1000).click('@negativeFeedback');
        },

        clickPositiveFeedback: function() {
            return this.waitForElementVisible('@positiveFeedback', 1000).click('@positiveFeedback');
        },

        openSecondGridPost: function() {
            return this.waitForElementVisible('@blogSecondGridNavigate', 1000).click('@blogSecondGridNavigate');
        },

        clickLoadMoreButton: function() {
            return this.waitForElementVisible('@blogReadMoreButton', 1000).click('@blogReadMoreButton');
        },

        clickSecondPostListButton: function() {
            return this.waitForElementVisible('@blogFirstButton', 1000).click('@blogFirstButton');
        },

        clickThirdPostListButton: function() {
            return this.waitForElementVisible('@blogSecondButton', 1000).click('@blogSecondButton');
        },

    }]
};