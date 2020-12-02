module.exports = {

    'lidyana007'(client) {

        const email = 'burcu-acehan89ural@yopmail.com';
        const password = 'Burcu-123';

        const newsletterEmail = 'burcu_acehanural@yopmail.com';
        const modalPage = '.modal.scrollable';
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

            .clickWomanRadioButton()
            .typeNewsletterEmail(newsletterEmail)

            .clickNewsletterSubmit()

            .pause(2000)

            client.assert.screenshotIdenticalToBaseline(modalPage, 'modalPage');
        }
               
    }