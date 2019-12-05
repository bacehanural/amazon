module.exports = {

    '@tags': ['lego387'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.mainPage();
    
        page
        .navigate()
        .maximizeWindow()
        .pause(6000)
        .acceptCookies()
        client.moveToElement('.NavigationBar .navWrapper > div:first-child > button', 50, 50);
            page
            .pause(3000)
            .clickFirstMegaFirstItem()
            .pause(3000)
            .clickFacetFilterFirstOption()
            .pause(3000)
            .clickResetAll()
            .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego387.png')

        } 
    }


