module.exports = {

    '@tags': ['lego183'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.legoMainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
                .checkInitialElements()
                .assert.elementPresent('@newSetsMainTitle')
                .assert.elementPresent('@newSetsFirstCard')
                .clickNextNewSets()
                .pause(3000)
                .assert.elementNotPresent('@newSetsFirstCard')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego183.png')

        } 
    }


