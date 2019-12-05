module.exports = {

    '@tags': ['lego196'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.mainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
            client.moveToElement('.Section2C app-grid-layout:nth-child(2) app-grid-layout > div > div > div:nth-child(4) .carousel-item', 100, 100);
            page
                .clickFifthBannerExplore()
                .pause(3000)
                .assert.elementPresent('@facetNavigationFilter')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego196.png')

        } 
    }


