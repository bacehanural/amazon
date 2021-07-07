module.exports = {

    'amazon003'(client) {

        const homeGlobalHeader = '#nav-belt';
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

            .pause(3000)

        client.assert.screenshotIdenticalToBaseline(homeGlobalHeader, 'homeGlobalHeader');
    }
               
}