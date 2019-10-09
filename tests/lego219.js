module.exports = {

    '@tags': ['lego219'],   
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
                .clickThirdItemThemes()
                .pause(3000)
                .assert.urlContains('https://www.lego.com/en-us/themes/star-wars')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego219.png')

        } 
    }


