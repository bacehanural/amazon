module.exports = {

    'lego167'(client) {
        const newSetsComponent = '.Section4 .category-carousel-wrapper';
        const page = client.page.legoMainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
                .checkInitialElements()
                .waitForElementVisible('@newSetsComponent', 1000)
                .assert.elementPresent('@newSetsComponent');
    
               
                client.assert.screenshotIdenticalToBaseline(newSetsComponent, 'newSetsComponent');
        }
               
    }