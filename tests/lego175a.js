module.exports = {

    '@tags': ['lego175a'],
        'TC_Lego_MainPage'(client) {
        const page = client.page.legoMainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
                .checkInitialElements()
                .assert.elementPresent('@firstCardTitle')
                .clickFirstProductCardShopNow()
                .pause(3000)
                .assert.urlContains('https://lego.maf.demo.emakina.ae/product/10895-LEGO::00/10895%20Emmet%20and%20Lucy')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego175a.png')

        } 
    }


