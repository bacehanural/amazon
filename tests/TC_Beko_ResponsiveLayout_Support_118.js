module.exports = {

    '@tags': ['TC_Beko_ResponsiveLayout_Support_118'],   
        'TC_Beko_ResponsiveLayout_Support'(client) {
        const page = client.page.bekoHomePage();
    
            page
            .navigate()
            .resizeWindow(1024, 768)
                .checkInitialElements()
                .openSupportMenu()
                .waitForElementVisible('@supportFirstElement', 10000)
                .checkSupportElements()
                .assert.elementPresent('@supportFirstElement')
                .assert.elementPresent('@supportSecondElement')
                .assert.elementPresent('@supportThirdElement');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_ResponsiveLayout_Support_118.png')

        } 
    }