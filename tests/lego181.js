module.exports = {

    '@tags': ['lego181'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.legoMainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
                .checkInitialElements()
                .assert.elementPresent('@exploreThirdBannerTitle')
                .assert.elementPresent('@exploreThirdBannerDescription')
                .clickThirdBannerExplore()
                .assert.urlContains('https://www.beko.com/es-es/Soporte')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego181.png')

        } 
    }


