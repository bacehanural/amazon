module.exports = {

    '@tags': ['lego211'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.mainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
            client.moveToElement('.Section4 .carousel-item.active > div:nth-child(2) > a', 100, 100);
            page
                .clickNewSetsSecondItem()
                .pause(3000)
                .assert.elementPresent('@productTitle')
                .assert.elementPresent('@addToBagButton')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego211.png')

        } 
    }


