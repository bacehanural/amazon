module.exports = {

    '@tags': ['lego908'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.mainPage();
    
        page
        .navigate()
        .maximizeWindow()
        .pause(6000)
        .acceptCookies()        
            .clickMiniCart()
            .pause(3000)
            .checkGuestEmptyBagInitialElements()
            .clickStartShopping()
            .pause(6000)
            .checkCarouselInitialElements()
            .checkSeriesCarouselInitialElements()
            client.saveScreenshot('tests_output/screenshots/lego908.png')

        },
    }


