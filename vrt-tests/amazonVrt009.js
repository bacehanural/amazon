module.exports = {

    'amazon009'(client) {

        
        const regYourName = 'BurcuUral';
        const regEmail = 'ural0nur@yandex.com.tr';
        const regPassword = '$7~9k.yir*@*4LT';
        const reEnterPassword = '$7~9k.yir*@*4LT'; 
        const loginFirstStepEmail = 'ural0nur@yandex.com.tr';
        const secondLoginPassword = 'Burcu!-!1989';
        
        const loggedInUserName = '#nav-link-accountList-nav-line-1';
        const page = client.page.mainPage();
    
        page
        .navigate()
        .maximizeWindow()
        .pause(3000)
        .checkInitialElements()

            .pause(1000)
            .clickSignInButton()
            .pause(3000)

            .checkFirstStepLoginElements()

            .loginFirstStepEmail(loginFirstStepEmail)

            .clickLoginContinueButton()

            .pause(3000)

            .secondLoginPassword(secondLoginPassword)

            .clickSecondLoginSignInButton()

            .pause(1000);


            page.checkAccountandListsDropDownListBoxElements()
            .pause(5000);

            page.moveToElement('#nav-link-accountList', 20, 15)
            .pause(10000);


            page.clickLogoutButton()
            .pause(3000)
            .assert.elementPresent('@loginFirstStepPanel')

            .pause(3000)
            
            .clickLoginCreateAmazonAccountButton()
            .pause(3000)

            .checkRegistrationElements()

            .registerYourName(regYourName)
            .registerEmail(regEmail)
            .registerPassword(regPassword)
            .registerReEnterPassword(reEnterPassword)

            .clickRegisterationButton()

            .pause(3000)

            .assert.elementPresent('@emailAddressAlreadyInUse')

            .clickRegisterEmailAlreadyInUseSignIn()

            .pause(3000)
            
            .loginFirstStepEmail(loginFirstStepEmail)

            .clickLoginContinueButton()

            .secondLoginPassword(secondLoginPassword)

            .clickSecondLoginSignInButton()

            .pause(4000)

       client.assert.screenshotIdenticalToBaseline(loggedInUserName, 'loggedInUserName');

    }
               
}