module.exports = {

    '@tags': ['lego190'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.legoMainPage();
    
        page
        .navigate()
        .maximizeWindow()
        .pause(6000)
        .acceptCookies()
            .checkInitialElements()
            .assert.elementPresent('@guaranteeComponentFourthDescription')
            .clickGuaranteeComponentFourth()
            .pause(3000)
            .assert.urlContains('https://www.lego.com/en-us/service/replacementparts')
            .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego190.png')

        } 
    }
