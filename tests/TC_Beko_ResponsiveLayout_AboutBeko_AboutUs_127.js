module.exports = {

    '@tags': ['TC_Beko_ResponsiveLayout_AboutBeko_AboutUs_127'],   
    //TC_Beko_ResponsiveLayout_AboutBeko_126, TC_Beko_ResponsiveLayout_AboutBeko_AboutUs_127
        'TC_Beko_ResponsiveLayout_AboutBeko'(client) {
        const page = client.page.bekoHomePage();
    
            page
            .navigate()
            .resizeWindow(1024, 768)
            .closeCookies()
                .checkInitialElements()
                .openAboutBekoMenu()
                .clickAboutBekoAboutUs()
                .waitForElementVisible('@aboutUsBanner', 10000)
                .assert.elementPresent('@aboutUsBanner');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_ResponsiveLayout_AboutBeko_AboutUs_127.png')

        } 
    }


