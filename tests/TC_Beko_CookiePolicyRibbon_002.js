module.exports = {

    '@tags': ['TC_Beko_CookiePolicyRibbon_002'],   
        'TC_Beko_CookiePolicyRibbon'(client) {
        const page = client.page.bekoHomePage();
    
            page
            .navigate()
            .maximizeWindow()
                .checkInitialElements()
                .closeCookies();

                client.saveScreenshot('tests_output/screenshots/TC_Beko_CookiePolicyRibbon_002.png')

            } 
        }
    