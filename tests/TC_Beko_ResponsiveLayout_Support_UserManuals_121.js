module.exports = {

    '@tags': ['TC_Beko_ResponsiveLayout_Support_UserManuals_121'],   
        'TC_Beko_ResponsiveLayout_Support'(client) {
        const mainQuery = 'RSSA290M21W';
        const page = client.page.bekoHomePage();
    
            page
            .navigate()
            .resizeWindow(1024, 768)
            .closeCookies()
                .checkInitialElements()
                .openSupportMenu()
                .openHelpCenter()
                .clickUserManualHelpCard()
                .clickFindingModelNumber()
                .clickFindingModelFirstItem()
                .clickFindingModelXButton()
                .searchUserManuals(mainQuery)
                .pause(1000)
                .clickSearchButtonUserManuals()
                .waitForElementVisible('@userManualSearchResult', 10000)
                .assert.elementPresent('@userManualSearchResult');

               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_ResponsiveLayout_Support_UserManuals_121.png')

        } 
    }


