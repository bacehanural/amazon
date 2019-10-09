module.exports = {

    '@tags': ['lego177'],   
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
                .clickPrevThemes()
                .pause(3000)
                .assert.elementNotPresent('@themesFirstItem')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego177.png')

        } 
    }


