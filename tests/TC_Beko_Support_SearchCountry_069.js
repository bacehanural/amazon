module.exports = {

'@tags': ['TC_Beko_Support_SearchCountry_069'],
    'TC_Beko_Support'(client) {
    const page = client.page.bekoHomePage();
    
        page
        .navigate()
        .maximizeWindow()
            .checkInitialElements()
            .closeCookies()
            .openSupportMenu()
            .waitForElementVisible('@supportFirstElement', 1000)
            .openHelpCenter()
            .searchYourCountryDropDownListBox()
            .selectYourCountry()
            .pause(6000)
            .assert.urlEquals('https://www.beko.com.tr/');
           
        client.saveScreenshot('tests_output/screenshots/TC_Beko_Support_SearchCountry_069.png')
    }
           
}