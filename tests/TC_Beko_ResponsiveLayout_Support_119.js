module.exports = {

    '@tags': ['TC_Beko_ResponsiveLayout_Support_119'],  
    
    //automation'da doğru çalışmıyor:manual ile automation arasında fark var!
        'TC_Beko_ResponsiveLayout_Support'(client) {
        const page = client.page.bekoHomePage();
    
            page
            .navigate()
            .resizeWindow(1024, 768)
            .closeCookies()
                .checkInitialElements()
                .openSupportMenu()
                .waitForElementVisible('@supportFirstElement', 1000)
                .checkSupportElements()
                .openHelpCenter()
                .pause(6000)
                .waitForElementVisible('@productSelection', 1000)
                .clickHelpCenterProduct()
                .selectHelpCenterProduct()
                .assert.elementPresent('@issueSelection')
                .clickHelpCenterIssue()
                .selectHelpCenterIssue()
                .pause(6000)
                .clickGetHelpButton()
                .waitForElementVisible('@supportResult', 1000)
                .assert.elementPresent('@supportResult')
                .pause(6000);
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_ResponsiveLayout_Support_119.png')

        } 
    }