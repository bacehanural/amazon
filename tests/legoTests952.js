module.exports = {

    '@tags': ['lego952'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.mainPage();
    
        page
        .navigate()
        .maximizeWindow()
        .pause(6000)
        .acceptCookies()        
            .pause(3000)
            .clickFirstCardShopNow()
            .pause(3000)
            .clickAddToBagButton()
            .clickRemoveButton()
            .pause(3000)
            .clickAddToBagButton()
            .assert.containsText('@modalPageHeader', 'Item(s) added to your bag');

            client.saveScreenshot('tests_output/screenshots/lego952.png')

        },
    }


