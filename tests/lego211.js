module.exports = {

    '@tags': ['lego211'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.legoMainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
                .checkInitialElements()
                .assert.elementPresent('@newSetsComponent')
                .assert.elementPresent('@newSetsMainTitle')
                .clickSecondCardNewSets()
                .pause(3000)
                .assert.urlContains('https://lego.maf.demo.emakina.ae/product/10767-LEGO::00/10767%20Duke%20Caboom')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego211.png')

        } 
    }


