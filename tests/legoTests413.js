module.exports = {

    '@tags': ['lego413'],   
        'TC_Lego_Header'(client) {
        const mainQuery = 'Lego';
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
                .waitForElementVisible('@firstSearchResult', 10000)
                .assert.elementPresent('@firstSearchResult')
                .clickFirstSearchOption()
                .pause(6000)
                .assert.containsText('@searchResultPDP', 'LEGO');
               
                client.saveScreenshot('tests_output/screenshots/lego413.png')
        }
               
    }