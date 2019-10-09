module.exports = {

    '@tags': ['lego176'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.legoMainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
                .checkInitialElements()
                .assert.elementPresent('@themesMainTitle')
                .assert.elementPresent('@themesFirstItem')
                .clickNextThemes()
                .pause(3000)
                .assert.elementNotPresent('@themesFirstItem')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego176.png')

        } 
    }


