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
                .waitForElementVisible('@sponsorshipBanner', 1000)
                .assert.elementPresent('@sponsorshipBanner')
                .bekoHomePage()
                .assert.elementPresent('@heroBanner');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_AboutBeko_Sponsorships_074.png')

        } 
    }


