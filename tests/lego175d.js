module.exports = {

    '@tags': ['lego175d'],
        'TC_Lego_MainPage'(client) {
        const page = client.page.legoMainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
                .checkInitialElements()
                .assert.elementPresent('@fourthCardTitle')
                .clickFourthProductCardShopNow()
                .pause(3000)
                .assert.urlContains('https://lego.maf.demo.emakina.ae/product/76129-LEGO::00/76129%20Hydro-Man%20Attack%20V29')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego175d.png')

        } 
    }


