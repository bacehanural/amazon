module.exports = {

    '@tags': ['lego221'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.legoMainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
                .checkInitialElements()
                .assert.elementPresent('@themesComponent')
                .assert.elementPresent('@themesMainTitle')
                .clickFifthItemThemes()
                .pause(3000)
                .assert.urlContains('https://www.lego.com/en-us/themes/city')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego221.png')

        } 
    }


