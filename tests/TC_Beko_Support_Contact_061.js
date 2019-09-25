module.exports = {

    '@tags': ['TC_Beko_Support_Contact_061'],   
        'TC_Beko_Support'(client) {
        const page = client.page.bekoHomePage();
    
            page
            .navigate()
            .maximizeWindow()
            .closeCookies()
                .checkInitialElements()
                .openSupportMenu()
                .waitForElementVisible('@supportFirstElement', 10000)
                .openHelpCenter()
                .clickProductsContact()
                .pause(1000)
                .assert.elementPresent('@contactBanner');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_Support_Contact_061.png')

        } 
    }


