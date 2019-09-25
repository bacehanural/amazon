module.exports = {

    '@tags': ['TC_Beko_Support_045'],   
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
                .waitForElementVisible('@productSelection')
                .clickHelpCenterProduct()
                .selectHelpCenterProduct()
                .assert.elementPresent('@issueSelection')
                .clickHelpCenterIssue()
                .selectHelpCenterIssue()
                .clickGetHelpButton()
                .clickStartOverButton()
                .pause(10000)
                .waitForElementVisible('@productSelection');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_Support_045.png')

        } 
    }