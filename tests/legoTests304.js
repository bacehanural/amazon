module.exports = {

    '@tags': ['lego304'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.mainPage();
    
            page
            .navigate()
            .waitForElementVisible('body', 60000)
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
            .clickCookiesSettings()
            .pause(3000)
            .checkCookieSettingsPageInitialElements()
            .assert.elementPresent('@breadcrumb')
            .assert.elementPresent('@saveButton')
            .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego304.png')
        },
    }
