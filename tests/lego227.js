module.exports = {

    '@tags': ['lego227'],   

        'TC_Lego_CookiesRibbon'(client) {
        const email = 'burcu.ural@yopmail.com';
        const password = 'Burcu-123';
        const page = client.page.legoCookiesRibbon();
    
            page
            .navigate()
            .waitForElementVisible('body', 60000)
            .maximizeWindow()
            .signInPage()
            .typeEmail(email)
            .typePassword(password)
            .clickSignInButton()
            .pause(6000)
            .cookiesSettings()
            .pause(6000)
            .assert.urlContains('https://lego.maf.demo.emakina.ae/my-account/consents');
               
            client.saveScreenshot('tests_output/screenshots/lego227.png')
        },
    }


