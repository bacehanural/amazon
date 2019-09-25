module.exports = {

    '@tags': ['TC_Beko_AboutBeko_Sponsorships_073'],   
        'TC_Beko_AboutBeko'(client) {
        const page = client.page.bekoHomePage();
    
            page
            .navigate()
            .maximizeWindow()
            .closeCookies()
                .checkInitialElements()
                .openAboutBekoMenu()
                .clickAboutBekoSponsorships()
                .waitForElementVisible('@sponsorshipsPageContent', 1000)
                .assert.elementPresent('@sponsorshipsPageContent');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_AboutBeko_Sponsorships_073.png')

        } 
    }


