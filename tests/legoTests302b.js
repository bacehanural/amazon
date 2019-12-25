module.exports = {

    '@tags': ['lego302b'],   
        'TC_Lego_MainPage'(client) {
        const email = 'burcu.ural@yopmail.com';
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
           /* .waitForElementVisible('@successMessage', 1000)
            .assert.elementPresent('@successMessage')*/
            .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego302b.png')
        },
    }
