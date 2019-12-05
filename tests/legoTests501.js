module.exports = {

    '@tags': ['lego501'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.mainPage();
    
        page
        .navigate()
        .maximizeWindow()
        .pause(6000)
        .acceptCookies()        
            .pause(3000)
            .clickFirstItemThemes()
            .pause(3000)
            .clickFirstAddToBagButtonPLP()
            .pause(3000)
            .clickXModal()
            .pause(3000)
            .clickThirdAddToBagButtonPLP()
            .pause(3000)
            .clickXModal()
            .clickMiniCart()
            .assert.containsText('@itemCountShoppingBag', '2');

            client.saveScreenshot('tests_output/screenshots/lego501.png')

        },
    }


