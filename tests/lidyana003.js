module.exports = {

    '@tags': ['lidyana003'],   

        'TC_Lidyana_MainPage'(client) {
        const email = 'burcu.ural_softtech@yopmail.com';
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
            .assert.elementPresent('@emailValidation')
            
            .clickLogin()
            .pause(1000)
            .clickLogout()
            .pause(3000)
            .clickLogin()
            .pause(1000)
            .assert.elementPresent('@typeEmail')
            .assert.elementPresent('@typePassword')
            .assert.elementPresent('@signInButton');
               
            client.saveScreenshot('tests_output/screenshots/lidyana003.png')
        }
    }


