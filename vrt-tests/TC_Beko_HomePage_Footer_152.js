module.exports = {

    'TC_Beko_HomePage_Footer_152'(client) {
    const homePageFooter = '.FooterTop__root';
    const page = client.page.bekoHomePage();

        page
        .navigate()
        .maximizeWindow()
        .closeCookies()
            .waitForElementVisible('@homePageFooter', 1000)
            .assert.elementPresent('@homePageFooter');

           
            client.assert.screenshotIdenticalToBaseline(homePageFooter, 'homePageFooter');
    }
           
}