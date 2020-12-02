module.exports = {

    'lidyana003'(client) {

        const email = 'b.a.u.89@yopmail.com';
        const password = 'Burcu-123';

        const loginRegisterField = '.site-header-v2 > div:nth-child(4) > nav:nth-child(2) .login-dropdown.header-dropdown';
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
            .pause(3000)

                client.assert.screenshotIdenticalToBaseline(loginRegisterField, 'loginRegisterField');
        }
               
    }