module.exports = {

'@tags': ['TC_Beko_Blog_079'],
    'TC_Beko_Blog'(client) {
    const page = client.page.bekoBlog();

        page
        .navigate()
        .maximizeWindow()
        .closeCookies()
            .openBlogPage()
            .checkBlogElements()
            .waitForElementVisible('@blogSecondGrid', 1000)
            .assert.elementPresent('@blogSecondGrid')
            .openSecondGridPost()
            .assert.elementPresent('@readPostBanner');

           
        client.saveScreenshot('tests_output/screenshots/TC_Beko_Blog_079.png')
    }
           
}