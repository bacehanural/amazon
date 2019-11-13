module.exports = {

    '@tags': ['lego184'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.legoMainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
                .checkInitialElements()
                .assert.elementPresent('@themesMainTitle')
                .assert.elementPresent('@newSetsFirstCard')
                .clickNextNewSets()
                .clickPrevNewSets()
                .pause(3000)
                .assert.elementPresent('@facetWrapper')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego184.png')

        } 
    }


