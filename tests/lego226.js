module.exports = {

    '@tags': ['lego226'],   

        'TC_Lego_CookiesRibbon'(client) {
        const email = 'burcu.ural@yopmail.com';
        const password = 'Test_123';
        const page = client.page.legoCookiesRibbon();
    
            page
            .navigate()
            .maximizeWindow()
            .signInPage()
            .typeEmail(email)
            .typePassword(password)
            .clickSignInButton()
            .pause(6000)
            .acceptCookies()
            .pause(6000);
               
            client.saveScreenshot('tests_output/screenshots/lego226.png')
        },
    }


