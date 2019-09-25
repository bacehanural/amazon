module.exports = {

    '@tags': ['TC_Beko_ResponsiveLayout_Support_Map_122'],   
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
                .clickFindAService()
                .assert.elementPresent('@findARetailerAddressField');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_ResponsiveLayout_Support_Map_122.png')

        } 
    }


