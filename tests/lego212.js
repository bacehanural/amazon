module.exports = {

    '@tags': ['lego212'],   
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
                .clickThirdCardNewSets()
                .pause(3000)
                .assert.urlContains('https://lego.maf.demo.emakina.ae/product/10769-LEGO::00/10769%20Toy%20Story%204%20RV%20Vacation%20V29')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego212.png')

        } 
    }


