module.exports = {

'@tags': ['TC_Beko_Support_UserManuals_049'],   
//TC_Beko_Support_UserManuals_049, TC_Beko_Support_Contact_062
    'TC_Beko_Support'(client) {
    const page = client.page.bekoHomePage();
    
        page
        .navigate()
        .maximizeWindow()
            .checkInitialElements()
            .closeCookies()
            .openSupportMenu()
            .waitForElementVisible('@supportFirstElement', 1000)
            .openUserManualsPage()
            .waitForElementVisible('@userManualBanner', 1000)
            .clickHelpHomeButton()
            .waitForElementVisible('@productSelection', 10000)
            .assert.elementPresent('@productSelection');
           
        client.saveScreenshot('tests_output/screenshots/TC_Beko_Support_UserManuals_049.png')
    }
           
}