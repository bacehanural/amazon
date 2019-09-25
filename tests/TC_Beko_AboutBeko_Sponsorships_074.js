module.exports = {

    '@tags': ['TC_Beko_AboutBeko_Sponsorships_074'],   
        'TC_Beko_AboutBeko'(client) {
        const page = client.page.bekoHomePage();
    
            page
            .navigate()
            .maximizeWindow()
                .checkInitialElements()
                .openAboutBekoMenu()
                .clickAboutBekoSponsorships()
                .waitForElementVisible('@aboutUsBanner', 10000)
                .assert.elementPresent('@aboutUsBanner')
                .bekoHomePage()
                .assert.elementPresent('@heroBanner');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_AboutBeko_Sponsorships_074.png')

        } 
    }


