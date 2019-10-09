module.exports = {

    '@tags': ['lego179'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.legoMainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
                .checkInitialElements()
                .assert.elementPresent('@exploreFirstBannerTitle')
                .assert.elementPresent('@exploreFirstBannerDescription')
                .clickFirstBannerExplore()
                .assert.urlContains('https://www.lego.com/en-us/search?q=Building%20Instructions')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego179.png')

        } 
    }


