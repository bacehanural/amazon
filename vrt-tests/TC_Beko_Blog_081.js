module.exports = {

    'TC_Beko_Blog_081'(client) {
    const firstBlogArticle = '#blogArticleList > div:first-child';
    const page = client.page.bekoBlog();

        page
        .navigate()
        .maximizeWindow()
        .closeCookies()
            .openBlogPage()
            .checkBlogElements()
            .waitForElementVisible('@blogSecondGrid', 1000)
            .clickSecondPostListButton()
            .waitForElementVisible('@firstBlogArticle', 1000)
            .assert.elementPresent('@firstBlogArticle');

           
            client.assert.screenshotIdenticalToBaseline(firstBlogArticle, 'firstBlogArticle');
    }
           
}