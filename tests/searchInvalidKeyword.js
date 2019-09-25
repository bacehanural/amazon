module.exports = {

'@tags': ['searchInvalid'],   
    'TC_Beko_Search'(client) {
    const invalidKeyword = 'xxxxxxxxxxx';
    const page = client.page.bekoHomePage();

        page
        .navigate()
        .maximizeWindow()
            .checkInitialElements()
            .clickSearch()
            .searchInvalidKeyword(invalidKeyword)
            .waitForElementNotVisible('@searchKeyword', 10000)
            .assert.elementNotPresent('@searchKeyword');
           
        client.saveScreenshot('tests_output/screenshots/searchInvalidKeyword.png')
    }
           
}