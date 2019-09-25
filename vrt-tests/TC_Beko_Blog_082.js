module.exports = {

    'TC_Beko_Blog_082'(client) {
    const firstBlogArticle = '#blogArticleList > div:first-child';
    const page = client.page.bekoBlog();

        page
        .navigate()
        .maximizeWindow()
        .closeCookies()
            .openBlogPage()
            .checkBlogElements()
            .waitForElementVisible('@blogSecondGrid', 1000)
            .clickThirdPostListButton()
            .waitForElementVisible('@firstBlogArticle', 1000)
            .assert.elementPresent('@firstBlogArticle');

           
            client.assert.screenshotIdenticalToBaseline(firstBlogArticle, 'firstBlogArticle');
    }
           
}