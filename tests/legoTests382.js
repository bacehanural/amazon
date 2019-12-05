module.exports = {

    '@tags': ['lego382'],   
        'TC_Lego_MainPage'(client) {
            const page = client.page.mainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
            client.moveToElement('.NavigationBar .navWrapper > div:first-child > button', 50, 50);
            page
            .clickFirstMegaFirstItem()
            .pause(6000)
            .clickSortByFilter()
            .selectFirstSortByFilter()
            .assert.elementPresent('@starRate');
               
            client.saveScreenshot('tests_output/screenshots/lego382.png')

        } 
    }


