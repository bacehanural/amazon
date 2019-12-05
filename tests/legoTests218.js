module.exports = {

    '@tags': ['lego218'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.mainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
            client.moveToElement('.theme-carousel-wrapper:first-child .item-wrapper:nth-child(2) a', 100, 100);
            page
                .clickSecondItemThemes()
                .pause(3000)
                .assert.elementPresent('@breadcrumb')
                .assert.elementPresent('@facetNavigationFilter')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego218.png')

        } 
    }


