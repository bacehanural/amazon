module.exports = {

    '@tags': ['lego302a'],   
        'TC_Lego_MainPage'(client) {
        const email = 'burcu@1881-M.K.A.-1283&=ba5%';
        const page = client.page.mainPage();
    
            page
            .navigate()
            .waitForElementVisible('body', 60000)
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
            client.moveToElement('div.footer-newsletter-form-section > input', 100, 100);
            page
            .typeYourEmailAddress(email)
            .clickSubscribeButton()
            .waitForElementVisible('@footerErrorMessage', 1000)
            .assert.elementPresent('@footerErrorMessage')
            .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego302a.png')
        },
    }
