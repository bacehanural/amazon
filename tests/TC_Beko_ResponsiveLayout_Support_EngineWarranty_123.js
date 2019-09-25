module.exports = {

    '@tags': ['TC_Beko_ResponsiveLayout_Support_EngineWarranty_123'],   
        'TC_Beko_ResponsiveLayout_Support'(client) {
        const page = client.page.bekoHomePage();
    
            page
            .navigate()
            .resizeWindow(1024, 768)
                .checkInitialElements()
                .openSupportMenu()
                .waitForElementVisible('@supportFirstElement', 10000)
                .checkSupportElements()
                .openHelpCenter()
                .pause(10000)
                .closeCookies()
                .waitForElementVisible('@productSelection', 10000)
                .clickProductTenYearsService();
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_ResponsiveLayout_Support_EngineWarranty_123.png')

        } 
    }


