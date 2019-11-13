module.exports = {

    '@tags': ['lego220'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.legoMainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
                .checkInitialElements()
                .assert.elementPresent('@themesComponent')
                .assert.elementPresent('@themesMainTitle')
                .clickFourthItemThemes()
                .pause(3000)
                .assert.elementPresent('@facetWrapper')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego220.png')

        } 
    }


