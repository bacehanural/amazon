module.exports = {

    '@tags': ['lego178'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.mainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
                
                .clickSeeMoreThemes()
                .pause(3000)
                .assert.elementPresent('@themesPageSorting')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego178.png')

        } 
    }


