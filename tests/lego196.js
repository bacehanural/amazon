module.exports = {

    '@tags': ['lego196'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.legoMainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
                .checkInitialElements()
                .assert.elementPresent('@exploreFifthBannerTitle')
                .assert.elementPresent('@exploreFifthBannerDescription')
                .clickFifthBannerExplore()
                .pause(3000)
                .assert.elementPresent('@facetWrapper')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego196.png')

        } 
    }


