module.exports = {

    '@tags': ['amazon005'],
      'TC_Amazon_MainPage'(client) {

         const loginFirstStepEmail = 'ural0nur@yandex.com.tr';
         const secondLoginPassword = 'Burcu!-!1989';
         
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

                .pause(3000);
                
        client.saveScreenshot('tests_output/screenshots/amazon005.png')
 
    } 
}    