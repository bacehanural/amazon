module.exports = {

    '@tags': ['TC_Beko_Support_EngineWarranty_060'],   
        'TC_Beko_Support'(client) {
        const page = client.page.bekoHomePage();
    
            page
            .navigate()
            .maximizeWindow()
                .checkInitialElements()
                .openSupportMenu()
                .waitForElementVisible('@supportFirstElement', 10000)
                .checkSupportElements()
                .openHelpCenter()
                .pause(10000)
                .closeCookies()
                .waitForElementVisible('@productSelection', 10000)
                .clickProductTenYearsService();
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_Support_EngineWarranty_060.png')

        } 
    }


