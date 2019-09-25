module.exports = {

    '@tags': ['TC_Beko_AboutBeko_AboutUs_071'],   
    //TC_Beko_AboutBeko_070, TC_Beko_AboutBeko_AboutUs_071
        'TC_Beko_AboutBeko'(client) {
        const page = client.page.bekoHomePage();
    
            page
            .navigate()
            .maximizeWindow()
            .closeCookies()
                .checkInitialElements()
                .openAboutBekoMenu()
                .clickAboutBekoAboutUs()
                .waitForElementVisible('@aboutUsBanner', 10000)
                .assert.elementPresent('@aboutUsBanner');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_AboutBeko_AboutUs_071.png')

        } 
    }


