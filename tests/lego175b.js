module.exports = {

    '@tags': ['lego175b'],
        'TC_Lego_MainPage'(client) {
        const page = client.page.legoMainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
                .checkInitialElements()
                .assert.elementPresent('@secondCardTitle')
                .clickSecondProductCardShopNow()
                .pause(3000)
                .assert.urlContains('https://lego.maf.demo.emakina.ae/product/75241-LEGO::00/75241%20Action%20Battle%20Echo%20Base%3F%20Def..%20V29')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego175b.png')

        } 
    }


