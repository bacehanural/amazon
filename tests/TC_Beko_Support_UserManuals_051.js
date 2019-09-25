module.exports = {

'@tags': ['TC_Beko_Support_UserManuals_051'],   
//TC_Beko_Support_044, TC_Beko_Support_UserManuals_048, TC_Beko_Support_051
    'TC_Beko_Support'(client) {
    const mainQuery = 'RSSA290M21W';
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
            .searchUserManuals(mainQuery)
            .pause(1000)
            .clickSearchButtonUserManuals()
            .waitForElementVisible('@userManualSearchResult', 10000)
            .assert.elementPresent('@userManualSearchResult');
           
        client.saveScreenshot('tests_output/screenshots/TC_Beko_Support_UserManuals_051.png')
    }
           
}