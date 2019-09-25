module.exports = {

'@tags': ['TC_Beko_ResponsiveLayout_Map_114'],
    'TC_Beko_ResponsiveLayout_Map'(client) {
    const page = client.page.bekoHomePage();

        page
        .navigate()
        .resizeWindow(1024, 768)
        .closeCookies()
            .checkInitialElements()
            .clickFindARetailer()
            .waitForElementVisible('@findARetailerAddressField', 1000)
            .assert.elementPresent('@findARetailerAddressField');
           
        client.saveScreenshot('tests_output/screenshots/TC_Beko_ResponsiveLayout_Map_114.png')
    }
           
}