module.exports = {

    'amazon002'(client) {

        const registrationForm = '#ap_register_form';
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

        client.assert.screenshotIdenticalToBaseline(registrationForm, 'registrationForm');
    }
               
}