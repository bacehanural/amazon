module.exports = {

    'lego259'(client) {
        const bottomWrapperLinks = '.footer-bottom-wrapper:first-child > div:first-child';
        const page = client.page.mainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
                .acceptCookies()
                .clickNewSetsFirstItem()
                client.moveToElement('.footer-bottom-wrapper:first-child > div:first-child', 100, 100);
                page
                .pause(6000)
                client.assert.screenshotIdenticalToBaseline(bottomWrapperLinks, 'bottomWrapperLinks');
        }
               
    }