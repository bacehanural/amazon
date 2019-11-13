module.exports = {

    '@tags': ['lego186'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.legoMainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
                .checkInitialElements()
                .assert.elementPresent('@largeBannerTitle')
                .assert.elementPresent('@largeBannerDescription')
                .clickBannerPlayButton()
                .pause(3000)
                .assert.urlContains('https://lego.maf.demo.emakina.ae/XXXXXXX')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego186.png')

        } 
    }


