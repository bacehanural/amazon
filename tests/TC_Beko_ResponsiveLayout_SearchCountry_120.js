module.exports = {

'@tags': ['TC_Beko_ResponsiveLayout_SearchCountry_120'],
    'TC_Beko_ResponsiveLayout_SearchCountry'(client) {
    const page = client.page.bekoHomePage();
    
        page
        .navigate()
        .resizeWindow(1024, 768)
            .checkInitialElements()
            .closeCookies()
            .openSupportMenu()
            .waitForElementVisible('@supportFirstElement', 1000)
            .openHelpCenter()
            .searchYourCountryDropDownListBox()
            .selectYourCountry()
            .pause(6000)
            .assert.urlEquals('https://www.beko.com.tr/');
           
        client.saveScreenshot('tests_output/screenshots/TC_Beko_ResponsiveLayout_SearchCountry_120.png')
    }
           
}