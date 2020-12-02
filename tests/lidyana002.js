module.exports = {

    '@tags': ['lidyana002'],   

        'TC_Lidyana_MainPage'(client) {
        const email = 'burcuacehanural@yopmail.com';
        const password = 'Burcu-123';
        const page = client.page.mainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(3000)
            .checkInitialElements()
            .acceptCookies()

            .clickLogin()
            .pause(3000)
            .typeEmail(email)
            .typePassword(password)
            .clickSignInButton()
            .pause(3000)

            .clickLogin()
            .clickAccountInformation()
            .assert.elementPresent('@myAccountField')
            .assert.elementPresent('@myAccountMenuBar')
            .assert.elementPresent('@emailValidation');
               
            client.saveScreenshot('tests_output/screenshots/lidyana002.png')
        }
    }


