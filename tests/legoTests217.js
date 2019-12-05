module.exports = {

    '@tags': ['lego217'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.mainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
            client.moveToElement('.theme-carousel-wrapper:first-child .item-wrapper:first-child a', 100, 100);
            page
                .clickFirstItemThemes()
                .pause(3000)
                .assert.elementPresent('@breadcrumb')
                .assert.elementPresent('@facetNavigationFilter')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego217.png')

        } 
    }


