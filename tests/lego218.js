module.exports = {

    '@tags': ['lego218'],   
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
                .clickSecondItemThemes()
                .pause(3000)
                .assert.urlContains('https://www.lego.com/en-us/themes/the-lego-movie-2')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego218.png')

        } 
    }


