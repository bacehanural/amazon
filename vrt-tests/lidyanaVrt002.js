module.exports = {

    'lidyana002'(client) {

        const email = 'b.acehanural-softtech@yopmail.com';
        const password = 'Burcu-123';

        const emailValidation = '.account-content .validate > div:nth-child(3) > input[value="burcuacehanural@yopmail.com"]';
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
            .pause(3000)

                client.assert.screenshotIdenticalToBaseline(emailValidation, 'emailValidation');
        }
               
    }