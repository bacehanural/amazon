module.exports = {

    'lego258'(client) {
    const bottomWrapperLinks = '.footer-bottom-wrapper:first-child > div:first-child';
    const page = client.page.mainPage();

        page
        .navigate()
        .maximizeWindow()
        .pause(6000)
        .acceptCookies()
        client.moveToElement('.NavigationBar .navWrapper > div:nth-child(6) > button', 50, 50);
             page
             .pause(3000)
            .clickSixthMegaFirstItem()
            client.moveToElement('.footer-bottom-wrapper:first-child > div:first-child', 100, 100);
            page
            .pause(6000)
            client.assert.screenshotIdenticalToBaseline(bottomWrapperLinks, 'bottomWrapperLinks');
    }
           
}