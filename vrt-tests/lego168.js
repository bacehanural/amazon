module.exports = {

    'lego168'(client) {
        const largeBanner = '.Section2B .carousel-item';
        const page = client.page.legoMainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
                .checkInitialElements()
                .waitForElementVisible('@largeBanner', 1000)
                .assert.elementPresent('@largeBanner');
    
               
                client.assert.screenshotIdenticalToBaseline(largeBanner, 'largeBanner');
        }
               
    }