module.exports = {

    '@tags': ['lego227'],   

        'TC_Lego_CookiesRibbon'(client) {
        const email = 'burcu.ural@yopmail.com';
        const password = 'Burcu-123';
        const page = client.page.mainPage();
    
            page
            .navigate()
            .waitForElementVisible('body', 60000)
            .maximizeWindow()
            .signInAccount()
            .typeEmail(email)
            .typePassword(password)
            .clickSignInButton()
            .pause(6000)
            .cookiesSettings()
            .pause(6000)
            .checkCookieSettingsPageInitialElements()
            .assert.elementPresent('@breadcrumb')
            .assert.elementPresent('@saveButton');
               
            client.saveScreenshot('tests_output/screenshots/lego227.png')
        },
    }


