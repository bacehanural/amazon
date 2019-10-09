module.exports = {

    'lego165'(client) {
        const themesComponent = '.example'; //after themes added
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