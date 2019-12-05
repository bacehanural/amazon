module.exports = {

    '@tags': ['lego179'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.mainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
            client.moveToElement('.Section2C app-grid-layout:nth-child(2) > div > div > div:first-child > div .banner-img-wrapper', 100, 100);
            page
                .clickFirstBannerExplore()
                .pause(3000)
                .assert.elementPresent('@facetNavigationFilter')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego179.png')

        } 
    }


