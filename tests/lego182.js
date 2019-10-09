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
                .assert.urlContains('https://www.lego.com/en-us/search?q=Family%20building%20ideas')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego182.png')

        } 
    }


