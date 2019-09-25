module.exports = {

'@tags': ['TC_Beko_Blog_080'],
    'TC_Beko_Blog'(client) {
    const page = client.page.bekoBlog();

        page
        .navigate()
        .maximizeWindow()
        .closeCookies()
            .openBlogPage()
            .checkBlogElements()
            .waitForElementVisible('@blogSecondGrid', 1000)
            .assert.elementNotPresent('@loadMoreArticle')
            .clickLoadMoreButton()
            .assert.elementPresent('@loadMoreArticle');

           
        client.saveScreenshot('tests_output/screenshots/TC_Beko_Blog_080.png')
    }
           
}