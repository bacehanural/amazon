module.exports = {

    '@tags': ['lego174'],
        'TC_Lego_MainPage'(client) {
        const page = client.page.legoMainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
                .checkInitialElements()
                .clickCarouselShopNowButton()
                .pause(3000)
                .assert.urlContains('https://lego.maf.demo.emakina.ae/vip-early-access')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego174.png')

        } 
    }


