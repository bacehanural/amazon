module.exports = {

    '@tags': ['lego178'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.legoMainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
                .checkInitialElements()
                .assert.elementPresent('@themesMainTitle')
                .assert.elementPresent('@themesComponent')
                .clickSeeAllThemes()
                .pause(3000)
                .assert.urlContains('https://www.lego.com/en-us/themes')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego178.png')

        } 
    }


