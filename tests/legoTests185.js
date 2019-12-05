module.exports = {

    '@tags': ['lego185'],   
        'TC_Lego_MainPage'(client) {
            const page = client.page.mainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
            client.moveToElement('.Section4 > app-product-carousel > div > div > div > div > a', 100, 100);
            page
                .clickSeeMoreNewSets()
                .pause(3000)
                .assert.elementPresent('@facetNavigationFilter')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego185.png')

        } 
    }


