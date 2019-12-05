module.exports = {

    'lego147'(client) {
        const bottomWrapperLinks = '.footer-bottom-wrapper:first-child > div:first-child';
        const page = client.page.mainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
                .acceptCookies()
                client.moveToElement('.footer app-grid-layout app-grid-layout > div', 100, 100);
                page
                .checkFooterInitialElements()
                .pause(6000)
                client.assert.screenshotIdenticalToBaseline(bottomWrapperLinks, 'bottomWrapperLinks');
        }
               
    }