module.exports = {

    '@tags': ['lego182'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.legoMainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
                .checkInitialElements()
                .assert.elementPresent('@exploreFourthBannerTitle')
                .assert.elementPresent('@exploreFourthBannerDescription')
                .clickFourthBannerExplore()
                .pause(3000)
                .assert.elementPresent('@facetWrapper')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego182.png')

        } 
    }


