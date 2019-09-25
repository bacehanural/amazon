module.exports = {

    '@tags': ['TC_Beko_Support_Contact_063'],   
        'TC_Beko_Support'(client) {
        const page = client.page.bekoHomePage();
    
        page
        .navigate()
        .maximizeWindow()
        .closeCookies()
            .checkInitialElements()
            .openSupportMenu()
            .waitForElementVisible('@supportFirstElement', 1000)
            .checkSupportElements()
            .openContactPage()
            .pause(1000)
            .clickIncidenceDropDown()
            .selectIncidenceItem()
            .clickProductRelatedIncidence()
            .selectProductRelatedIncidence()
            .clickHelpfulLinksButton()
            .assert.elementPresent('@directedHelpfulLinkPageBanner');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_Support_Contact_063.png')

        } 
    }


