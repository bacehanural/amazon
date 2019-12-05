module.exports = {

    '@tags': ['lego422'],   
        'TC_Lego_Header'(client) {
        const mainQuery = 'ksflksfjlfjlskjAABB';
        const page = client.page.header();
    
            page
            .navigate()
            .waitForElementVisible('body', 60000)
            .maximizeWindow()
            .pause(9000)
            .acceptCookies()
                .checkInitialElements()
                .clickSearch()
                .searchMainPage(mainQuery)
                .waitForElementVisible('@searchKeyword', 10000)
                .assert.elementPresent('@searchKeyword')
                .clickSearchedKeyword()
                .pause(6000)
                .assert.containsText('@searchResultNoSearchResultPage', 'ksflksfjlfjlskjAABB');
               
                client.saveScreenshot('tests_output/screenshots/lego422.png')
        }
               
    }