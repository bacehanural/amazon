module.exports = {

    '@tags': ['lego222'],   
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
                .clickSixthItemThemes()
                .pause(3000)
                .assert.urlContains('https://www.lego.com/en-us/themes/overwatch')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego222.png')

        } 
    }


