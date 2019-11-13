module.exports = {

    '@tags': ['lego217'],   
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
                .clickFirstItemThemes()
                .pause(3000)
                .assert.elementPresent('@facetWrapper')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego217.png')

        } 
    }


