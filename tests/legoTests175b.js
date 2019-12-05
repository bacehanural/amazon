module.exports = {

    '@tags': ['lego175b'],
        'TC_Lego_MainPage'(client) {
        const page = client.page.mainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
            .checkSeriesCarouselInitialElements()
                .assert.elementPresent('@secondCardTitle')
                .clickSecondCardShopNow()
                .pause(3000)
                .waitForElementVisible('@productTitle', 1000)
                .assert.elementPresent('@productTitle')
                .waitForElementVisible('@addToBagButton', 1000)
                .assert.elementPresent('@addToBagButton')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego175b.png')

        } 
    }


