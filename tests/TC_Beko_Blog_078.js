module.exports = {

'@tags': ['TC_Beko_Blog_078'],
    'TC_Beko_Blog'(client) {
    const page = client.page.bekoBlog();

        page
        .navigate()
        .maximizeWindow()
        .closeCookies()
            .openBlogPage()
            .checkBlogElements()
            .clickReadPostButton()
            .waitForElementVisible('@readPostBanner', 1000)
            .assert.elementPresent('@readPostBanner')
            .clickNegativeFeedback()
            .assert.elementPresent('@thanksForFeedback');

           
        client.saveScreenshot('tests_output/screenshots/TC_Beko_Blog_078.png')
    }
           
}