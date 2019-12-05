module.exports = {

    '@tags': ['lego226'],   

        'TC_Lego_CookiesRibbon'(client) {
        const email = 'burcu.ural@yopmail.com';
        const password = 'Burcu-123';
        const page = client.page.register();
    
            page
            .navigate()
            .maximizeWindow()
            .signInPage()
            .typeEmail(email)
            .typePassword(password)
            .clickSignInButton()
            .pause(6000)
            .assert.elementPresent('@acceptCookiesButton')
            .acceptCookies()
            .assert.elementNotPresent('@acceptCookiesButton')
            .pause(6000);
               
            client.saveScreenshot('tests_output/screenshots/lego226.png')
        },
    }


