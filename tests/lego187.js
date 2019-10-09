module.exports = {

    '@tags': ['lego187'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.legoMainPage();
    
        page
        .navigate()
        .maximizeWindow()
        .pause(6000)
        .acceptCookies()
            .checkInitialElements()
            .assert.elementPresent('@guaranteeComponentFirstDescription')
            .clickGuaranteeComponentFirst()
            .pause(3000)
            .assert.urlContains('https://www.lego.com/en-us/page/shipping-handlinge')
            .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego187.png')

        } 
    }


