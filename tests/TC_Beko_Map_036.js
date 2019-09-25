module.exports = {

'@tags': ['TC_Beko_Map_036'],   
//TC_Beko_Map_035, TC_Beko_Map_036
    'TC_Beko_Map'(client) {
    const page = client.page.bekoHomePage();

        page
        .navigate()
        .maximizeWindow()
        .closeCookies()
            .checkInitialElements()
            .clickFindARetailer()
            .waitForElementVisible('@findARetailerAddressField', 1000)
            .assert.elementPresent('@findARetailerAddressField')
            .clickFindARetailerXButton()
            .checkInitialElements();
           
        client.saveScreenshot('tests_output/screenshots/TC_Beko_Map_036.png')
    }
           
}