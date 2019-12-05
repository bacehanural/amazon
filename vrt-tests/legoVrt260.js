module.exports = {

    'lego260'(client) {
        const bottomWrapper = '.footer-bottom-wrapper:first-child';
        const page = client.page.mainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
            client.moveToElement('.NavigationBar .navWrapper > div:first-child > button', 50, 50);
            page
            .pause(3000)
            .clickFirstMegaFirstItem()
            .checkFooterInitialElements()
            client.moveToElement('.footer-bottom-wrapper:first-child', 100, 100);
            page.pause(6000);
    
               
            client.assert.screenshotIdenticalToBaseline(bottomWrapper, 'bottomWrapper');
        }
               
    }