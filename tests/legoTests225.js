module.exports = {

    '@tags': ['lego225'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.mainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .assert.elementPresent('@acceptCookiesRibbon')
            .acceptCookies()
            .pause(3000)
            .assert.elementNotPresent('@acceptCookiesRibbon')
            .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego225.png')

        } 
    }


