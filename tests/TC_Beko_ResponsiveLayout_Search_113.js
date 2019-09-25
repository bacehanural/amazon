module.exports = {

    '@tags': ['TC_Beko_ResponsiveLayout_Search_113'],  
    //TC_Beko_ResponsiveLayout_HomePage_112, TC_Beko_ResponsiveLayout_Search_113
        'TC_Beko_ResponsiveLayout_Search'(client) {
        const mainQuery = 'Cocina';
        const page = client.page.bekoHomePage();
    
            page
            .navigate()
            .resizeWindow(1024, 768)
            .closeCookies()
                .checkInitialElements()
                .clickSearch()
                .searchHomePage(mainQuery)
                .waitForElementVisible('@searchKeyword', 10000)
                .assert.elementPresent('@searchKeyword')
                .clickSearchedKeyword()
                .assert.elementPresent('@searchResult')
                .pause(1000)
                .clickProductsWaypoint()
                .assert.elementPresent('@productsHeading');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_ResponsiveLayout_Search_113.png')
        }
               
    }