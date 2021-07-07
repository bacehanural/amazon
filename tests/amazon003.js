module.exports = {

    '@tags': ['amazon003'],
      'TC_Amazon_MainPage'(client) {

         const page = client.page.mainPage();
     
            page
            .navigate()
            .maximizeWindow()
            .pause(3000)
            .checkInitialElements()

                .pause(1000)
                .clickRegister()
                .pause(3000)

                .checkRegistrationElements()
                .pause(1000)
                .clickRegisterAmazonLogo()
                .assert.elementPresent('@homeGlobalHeader')
                .pause(1000);
                
        client.saveScreenshot('tests_output/screenshots/amazon003.png')
 
    } 
}    