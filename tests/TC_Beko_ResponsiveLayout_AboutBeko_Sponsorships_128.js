module.exports = {

    '@tags': ['TC_Beko_ResponsiveLayout_AboutBeko_Sponsorships_1283'],   
        'TC_Beko_ResponsiveLayout_AboutBeko'(client) {
        const page = client.page.bekoHomePage();
    
            page
            .navigate()
            .resizeWindow(1024, 768)
            .closeCookies()
                .checkInitialElements()
                .openAboutBekoMenu()
                .clickAboutBekoSponsorships()
                .waitForElementVisible('@sponsorshipsPageContent', 1000)
                .assert.elementPresent('@sponsorshipsPageContent');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_ResponsiveLayout_AboutBeko_Sponsorships_128.png')

        } 
    }


