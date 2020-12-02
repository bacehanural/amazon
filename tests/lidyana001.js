module.exports = {

    '@tags': ['lidyana001'],
        'TC_Lidyana_MainPage'(client) {
        const page = client.page.mainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(3000)
            .checkInitialElements()
            .acceptCookies()
                .assert.elementNotPresent('@acceptCookiesRibbon')
                .pause(1000);
               
            client.saveScreenshot('tests_output/screenshots/lidyana001.png')

        } 
    }


