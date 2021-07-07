module.exports = {

    '@tags': ['amazon002'],   

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
        
            .assert.elementPresent('@createAccountHeader')
            .assert.elementPresent('@registerSignIn')
            .assert.elementPresent('@registerCreateYourAmazonAccountButton');
               
        client.saveScreenshot('tests_output/screenshots/amazon002.png')
    }
}


