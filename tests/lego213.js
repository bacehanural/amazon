module.exports = {

    '@tags': ['lego213'],   
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
                .clickFourthCardNewSets()
                .pause(3000)
                .assert.urlContains('https://lego.maf.demo.emakina.ae/product/71024-LEGO::00/71024%20Disney%20Series%202%20V110')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego213.png')

        } 
    }


