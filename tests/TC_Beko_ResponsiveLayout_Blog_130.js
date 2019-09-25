module.exports = {

'@tags': ['TC_Beko_ResponsiveLayout_Blog_130'], 
    'TC_Beko_ResponsiveLayout_Blog'(client) {
    const page = client.page.bekoBlog();

        page
        .navigate()
        .resizeWindow(1024, 768)
        .closeCookies()
            .openBlogPage()
            .checkBlogElements()
            .waitForElementVisible('@blogBanner', 1000)
            .assert.elementPresent('@blogBanner');
                 
        client.saveScreenshot('tests_output/screenshots/TC_Beko_ResponsiveLayout_Blog_130.png')
    }
           
}