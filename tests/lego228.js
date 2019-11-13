module.exports = {

    '@tags': ['lego228'],   
        'TC_Lego_Header'(client) {
        const mainQuery = 'Lego';
        const page = client.page.legoHeader();
    
            page
            .navigate()
            .waitForElementVisible('body', 60000)
            .maximizeWindow()
            .pause(10000)
            .acceptCookies()
                .checkInitialElements()
                .clickSearch()
                .searchMainPage(mainQuery)
                .waitForElementVisible('@searchKeyword', 10000)
                .assert.elementPresent('@searchKeyword')
                .clickSearchedKeyword()
                .pause(6000)
                .assert.elementPresent('@plpSearchResult');
               
                client.saveScreenshot('tests_output/screenshots/lego228.png')
        }
               
    }