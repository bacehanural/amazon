module.exports = {

    '@tags': ['lego1184'],   

        'TC_Lego_MainPage'(client) {
        const page = client.page.mainPage();
    
            page
            .navigate()
            .waitForElementVisible('body', 60000)
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
            client.moveToElement('.SiteTopHeaderRight .myAccount-Component .collapseButton', 50, 50);

            page
            .clickLogInOut()
            .pause(6000)
            .checkLoginPageInitialElements()   
            client.saveScreenshot('tests_output/screenshots/lego1184.png')
        },
    }


