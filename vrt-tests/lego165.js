module.exports = {

    'lego165'(client) {
        const themesComponent = '.theme-carousel-wrapper:first-child';
        const page = client.page.legoMainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
                .checkInitialElements()
                .waitForElementVisible('@themesComponent', 1000)
                .assert.elementPresent('@themesComponent');
    
               
                client.assert.screenshotIdenticalToBaseline(themesComponent, 'themesComponent');
        }
               
    }