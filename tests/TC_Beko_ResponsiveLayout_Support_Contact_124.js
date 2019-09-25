module.exports = {

    '@tags': ['TC_TC_Beko_ResponsiveLayout_Support_Contact_124'],   
        'TC_Beko_ResponsiveLayout_Support'(client) {
        const page = client.page.bekoHomePage();
    
            page
            .navigate()
            .resizeWindow(1024, 768)
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
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_ResponsiveLayout_Support_Contact_124.png')

        } 
    }


