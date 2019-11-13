module.exports = {

    '@tags': ['lego225'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.legoCookiesRibbon();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
            .pause(3000)
            .assert.elementNotPresent('@acceptCookiesButton')
            .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego225.png')

        } 
    }


