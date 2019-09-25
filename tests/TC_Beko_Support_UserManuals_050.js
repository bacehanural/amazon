module.exports = {

'@tags': ['TC_Beko_Support_UserManuals_050'],   
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
            .clickFindingModelNumber()
            .waitForElementVisible('@productsYouHave', 10000)
            .assert.elementPresent('@productsYouHave');
           
        client.saveScreenshot('tests_output/screenshots/TC_Beko_Support_UserManuals_050.png')
    }
           
}