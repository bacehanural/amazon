module.exports = {

    '@tags': ['lego901'],   
        'TC_Lego_Header'(client) {
        const mainQuery = 'ksflksfjlfjlskjAABB';
        const searchQuery = 'lego';
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
                .assert.containsText('@searchResultNoSearchResultPage', 'ksflksfjlfjlskjAABB')
                .clickNoSearchResultPageSearch()
                .searchNoSearchResultPage(searchQuery)
                .pause(3000)
                client.moveToElement('.dropdown-item:first-child ngb-highlight', 100, 100);

                page
                .pause(3000)
                .clickSearchedKeyword()
                .pause(6000)
                .assert.containsText('@searchResultPLP', 'Showing results for "lego"');
               
                client.saveScreenshot('tests_output/screenshots/lego901.png')
        }
               
    }