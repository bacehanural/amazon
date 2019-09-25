module.exports = {

    '@tags': ['TC_Beko_Support_047'],  
    //TC_Beko_Support_046, TC_Beko_Support_047
    //automation'da doğru çalışmıyor:manual ile automation arasında fark var!
        'TC_Beko_Support'(client) {
        const page = client.page.bekoHomePage();
    
        page
        .navigate()
        .maximizeWindow()
            .checkInitialElements()
            .closeCookies()
            .openSupportMenu()
            .waitForElementVisible('@supportFirstElement', 10000)
            .checkSupportElements()
            .openContactPage()
            .assert.elementPresent('@contactBanner')
            .navigateHelpCenter()
            .pause(10000)
            .waitForElementVisible('@productSelection')
            .clickHelpCenterProduct()
            .selectHelpCenterProduct()
            .assert.elementPresent('@issueSelection')
            .clickHelpCenterIssue()
            .selectHelpCenterIssue()
            .pause(1000)
            .clickGetHelpButton()
            .clickWaypointFAQ()
            .clickWaypointFAQCollapse()
            .pause(6000)
            .assert.elementPresent('@openFAQ')
            .pause(6000)
            .clickWaypointFAQCollapse()
            .assert.elementNotPresent('@openFAQ');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_Support_047.png')

        } 
    }