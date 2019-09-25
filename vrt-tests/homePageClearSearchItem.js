module.exports = {
 
        'TC_Beko_Search'(client) {
        const mainQuery = 'Cocina';
        const searchField = '.root.responsivegrid > div > div:nth-child(2) > div > div:first-child > div:first-child > form:first-child';
        const page = client.page.bekoHomePage();
    
            page
            .navigate()
            .maximizeWindow()
                .checkInitialElements()
                .clickSearch()
                .searchHomePage(mainQuery)
                .waitForElementVisible('@searchKeyword', 10000)
                .assert.elementPresent('@searchKeyword')
                .clickSearchedKeyword()
                .assert.elementPresent('@searchResult')
                .clickXButtonSearch()
                .waitForElementVisible(searchField);
               
            client.assert.screenshotIdenticalToBaseline(searchField, 'searchField');
        }
               
    }