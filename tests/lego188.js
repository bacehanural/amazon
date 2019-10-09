module.exports = {

    '@tags': ['lego188'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.legoMainPage();
    
        page
        .navigate()
        .maximizeWindow()
        .pause(6000)
        .acceptCookies()
            .checkInitialElements()
            .assert.elementPresent('@guaranteeComponentSecondDescription')
            .clickGuaranteeComponentSecond()
            .pause(3000)
            .assert.urlContains('https://www.lego.com/en-us/vip')
            .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego188.png')

        } 
    }


