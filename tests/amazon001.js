module.exports = {

    '@tags': ['amazon001'],
        'TC_Amazon_MainPage'(client) {
        const page = client.page.mainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(3000)
            .checkInitialElements()
                .assert.elementPresent('@relatedDeliveryCountryName')
                .assert.elementPresent('@acountLists')
                .pause(1000);
               
        client.saveScreenshot('tests_output/screenshots/amazon001.png')

    } 
}


