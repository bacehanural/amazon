module.exports = {

    '@tags': ['TC_Beko_Support_Map_053'],   
    //TC_Beko_Support_Map_052, TC_Beko_Support_Map_053
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
                .clickFindAService()
                .assert.elementPresent('@findARetailerAddressField')
                .clickFindARetailerXButton()
                .assert.elementPresent('@bekoLogo');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_Support_Map_053.png')

        } 
    }


